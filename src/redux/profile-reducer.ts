import {GeneralActionType, PostType, ProfilePageType} from "./state";

export const ProfileReducer = (state: ProfilePageType, action: GeneralActionType) => {

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
