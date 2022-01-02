import {rerenderEntireTree} from "../render";

export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
}

export type DialogsType = {
    id: number,
    name: string,
}

export type MessagesType = {
    id: number,
    message: string,
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>,
    newMessage: string,
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hey, how are you?', likesCount: 10},
            {id: 2, message: 'Its my first post', likesCount: 3},
        ],
        newPostText: 'kek',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Tim'},
            {id: 2, name: 'Nastya'},
            {id: 3, name: 'Gena'},
            {id: 4, name: 'Cheburashka'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Hey'},
        ],
        newMessage: '',
    },
}

export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (text: string) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export const addMessages = () => {
    const newMessagesText: MessagesType = {
        id: 4,
        message: state.dialogsPage.newMessage
    }

    state.dialogsPage.messages.push(newMessagesText);
    state.dialogsPage.newMessage = '';
    rerenderEntireTree(state)
}

export const updateNewDialogsMessages = (text: string) => {
    state.dialogsPage.newMessage = text;

    rerenderEntireTree(state)
}