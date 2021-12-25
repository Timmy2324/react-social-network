export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}

export type ProfilePageType = {
    posts: Array<PostType>,
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
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hey, how are you?', likesCount: 10},
            {id: 2, message: 'Its my first post', likesCount: 3},
        ],

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
    },
}