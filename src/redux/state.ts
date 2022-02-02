
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

export type StoreType = {
    _state: StateType
    _onChange: () => void
    updateNewPostText: (text: string) => void
    addPost: () => void
    addMessages: () => void
    updateNewDialogsMessages: (text: string) => void
    subscribe: (observer: () => void)  => void
    getState: () => StateType
    dispatch: (action: actionType) => void
}

export type actionType = AddPostActionType | UpdateNewPostTextActionType | AddMessagesActionType | UpdateNewDialogsMessagesActionType;

type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text
    } as const
}

type AddMessagesActionType = ReturnType<typeof addMessagesAC>
export const addMessagesAC = () => {
    return {
        type: 'ADD-MESSAGES'
    } as const
}

type UpdateNewDialogsMessagesActionType = ReturnType<typeof updateNewDialogsMessagesAC>
export const updateNewDialogsMessagesAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-DIALOG-TEXT',
        text
    } as const
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey, how are you?', likesCount: 10},
                {id: 2, message: 'Its my first post', likesCount: 3},
            ],
            newPostText: '',
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
    },
    _onChange() {
        console.log('state changed');
    },
    updateNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this._onChange();
    },
    addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._onChange();
    },
    addMessages() {
        const newMessagesText: MessagesType = {
            id: 4,
            message: this._state.dialogsPage.newMessage,
        }

        this._state.dialogsPage.messages.push(newMessagesText);
        this._state.dialogsPage.newMessage = '';
        this._onChange();
    },
    updateNewDialogsMessages(text) {
        this._state.dialogsPage.newMessage = text;
        this._onChange();
    },
    subscribe(observer: () => void) {
        this._onChange = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._onChange();
        } else if(action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._onChange();
        } else if(action.type === 'ADD-MESSAGES') {
            const newMessagesText: MessagesType = {
                id: 4,
                message: this._state.dialogsPage.newMessage,
            }

            this._state.dialogsPage.messages.push(newMessagesText);
            this._state.dialogsPage.newMessage = '';
            this._onChange();
        } else if(action.type === 'UPDATE-NEW-DIALOG-TEXT') {
            this._state.dialogsPage.newMessage = action.text;
            this._onChange();
        }
    }
}