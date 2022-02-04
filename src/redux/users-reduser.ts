
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
}

const initialState: UsersPageType = {
    users: []
}

export const UsersReducer = (state: UsersPageType = initialState, action: ActionType) => {

    switch (action.type) {
        case 'FOLLOW-TOGGLE':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: !user.followed} : user)
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

type ActionType = FollowToggleType | SetUsersType;

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