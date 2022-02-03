
export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hey, how are you?', likesCount: 10},
        {id: 2, message: 'Its my first post', likesCount: 3},
    ],
        newPostText: '',
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: AddPostActionType | UpdateNewPostTextActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.text};
        }
        default:
            return state;
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text
    } as const
}
