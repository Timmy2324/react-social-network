
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
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)}
        default:
            return state;
    }
}

type ActionType = UnFollowType | FollowType | SetUsersType | SetCurrentPageType | SetTotalCountType | SetFetchingType | ToggleFollowingInProgress;

type UnFollowType = ReturnType<typeof UnFollowAC>
export const UnFollowAC = (userID: number) => {
    return {
        type: 'UN-FOLLOW',
        userID,
    } as const
}

type FollowType = ReturnType<typeof FollowAC>
export const FollowAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID,
    } as const
}

type SetUsersType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}

type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}

type SetTotalCountType = ReturnType<typeof setTotalCountAC>
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount,
    } as const
}

type SetFetchingType = ReturnType<typeof setFetchingAC>
export const setFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET-FETCHING',
        isFetching,
    } as const
}

type ToggleFollowingInProgress = ReturnType<typeof toggleFollowingInProgressAC>
export const toggleFollowingInProgressAC = (userID: number, isFetching: boolean) => {
    return {
        type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
        userID,
        isFetching,
    } as const
}