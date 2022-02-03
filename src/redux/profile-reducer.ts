import {GeneralActionType, PostType, ProfilePageType} from "./store";

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hey, how are you?', likesCount: 10},
        {id: 2, message: 'Its my first post', likesCount: 3},
    ],
        newPostText: '',
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: GeneralActionType) => {

    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.text
            return state;
        }
        case 'ADD-POST': {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
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
