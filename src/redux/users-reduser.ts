
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
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
}

export const UsersReducer = (state: UsersPageType = initialState, action: ActionType) => {

    switch (action.type) {
        case 'FOLLOW-TOGGLE':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: !user.followed} : user)
            }
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state;
    }
}

type ActionType = FollowToggleType | SetUsersType | SetCurrentPageType | SetTotalCountType;

type FollowToggleType = ReturnType<typeof FollowToggleAC>
export const FollowToggleAC = (userID: number) => {
    return {
        type: 'FOLLOW-TOGGLE',
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
