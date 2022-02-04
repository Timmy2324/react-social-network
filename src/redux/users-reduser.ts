import avatar from "../img/avatar.jpg";

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photo: string
    isFollow: boolean
    fullName: string
    status: string
    location: LocationType
}

export type UsersPageType = {
    users: Array<UserType>
}

const initialState: UsersPageType = {
    users: [
        {
            id: 1,
            photo: avatar,
            isFollow: false,
            fullName: 'Tim',
            status: 'Ky',
            location: {
                city: 'Astrakhan',
                country: 'Russia',
            },
        },
        {
            id: 2,
            photo: avatar,
            isFollow: true,
            fullName: 'Nastya',
            status: 'hello',
            location: {
                city: 'Astrakhan',
                country: 'Russia',
            },
        },
    ]
}

export const UsersReducer = (state: UsersPageType = initialState, action: ActionType) => {

    switch (action.type) {
        case 'FOLLOW-TOGGLE':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, isFollow: !user.isFollow} : user)
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