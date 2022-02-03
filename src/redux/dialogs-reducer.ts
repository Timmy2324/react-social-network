
type DialogsType = {
    id: number,
    name: string,
}

type MessagesType = {
    id: number,
    message: string,
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>,
    newMessage: string,
}

const initialState: DialogsPageType = {
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
}

export const DialogsReducer = (state: DialogsPageType = initialState, action: AddMessagesActionType | UpdateNewDialogsMessagesActionType): DialogsPageType => {

    switch (action.type) {
        case 'ADD-MESSAGES': {
            const newMessagesText: MessagesType = {
                id: 4,
                message: state.newMessage,
            }
            return {...state, messages: [...state.messages, newMessagesText], newMessage: ''};
        }
        case "UPDATE-NEW-DIALOG-TEXT": {
            return {...state, newMessage: action.text};
        }
        default:
            return state;
    }
}

export type AddMessagesActionType = ReturnType<typeof addMessagesAC>
export const addMessagesAC = () => {
    return {
        type: 'ADD-MESSAGES'
    } as const
}

export type UpdateNewDialogsMessagesActionType = ReturnType<typeof updateNewDialogsMessagesAC>
export const updateNewDialogsMessagesAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-DIALOG-TEXT',
        text
    } as const
}