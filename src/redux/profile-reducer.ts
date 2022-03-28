import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: UserProfileType | null
}

export type UserProfileType = {
    "aboutMe": string
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string,
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string,
    }
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hey, how are you?', likesCount: 10},
        {id: 2, message: 'Its my first post', likesCount: 3},
    ],
    newPostText: '',
    profile: null,
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: GeneralActionType | UpdateNewPostTextActionType): ProfilePageType => {

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
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

type GeneralActionType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileType;

export type AddPostActionType = ReturnType<typeof addPost>
export const addPost = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>
export const updateNewPostText = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text
    } as const
}

export type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getUserProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
}