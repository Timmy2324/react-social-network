export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const AuthReducer = (state: AuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.payload, isAuth: true}
        }
        default:
            return state;
    }
}


type ActionType = SetUserDataType

type SetUserDataType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (data: AuthType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            ...data,
        }
    } as const
}