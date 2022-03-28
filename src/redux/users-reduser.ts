import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

type LocationType = {
    city: string
    country: string
}

type PhotoType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    photos: PhotoType
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const UsersReducer = (state: UsersPageType = initialState, action: ActionType) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
            }
        case 'UN-FOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
            }
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'SET-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-FOLLOWING-IN-PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state;
    }
}

type ActionType =
    UnFollowType
    | FollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalCountType
    | SetFetchingType
    | ToggleFollowingInProgress;

type UnFollowType = ReturnType<typeof unFollowSuccess>
export const unFollowSuccess = (userID: number) => {
    return {
        type: 'UN-FOLLOW',
        userID,
    } as const
}

type FollowType = ReturnType<typeof followSuccess>
export const followSuccess = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID,
    } as const
}

type SetUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}

type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}

type SetTotalCountType = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount,
    } as const
}

type SetFetchingType = ReturnType<typeof setFetching>
export const setFetching = (isFetching: boolean) => {
    return {
        type: 'SET-FETCHING',
        isFetching,
    } as const
}

type ToggleFollowingInProgress = ReturnType<typeof toggleFollowingInProgress>
export const toggleFollowingInProgress = (userID: number, isFetching: boolean) => {
    return {
        type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
        userID,
        isFetching,
    } as const
}

export const getUsers = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    usersAPI.getUsers(pageSize, currentPage)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
            dispatch(setFetching(false));
        });
}

export const follow = (userID: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(userID, true));
    usersAPI.follow(userID)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userID));
            }
            dispatch(toggleFollowingInProgress(userID, false));
        })
}

export const unFollow = (userID: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(userID, true));
    usersAPI.unFollow(userID)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollowSuccess(userID));
            }
            dispatch(toggleFollowingInProgress(userID, false));
        })
}