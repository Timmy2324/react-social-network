import {DialogsPageType, GeneralActionType, MessagesType} from "./state";

export const DialogsReducer = (state: DialogsPageType, action: GeneralActionType) => {

    switch (action.type) {
        case 'ADD-MESSAGES': {
            const newMessagesText: MessagesType = {
                id: 4,
                message: state.newMessage,
            }

            state.messages.push(newMessagesText);
            state.newMessage = '';
            return state;
        }
        case "UPDATE-NEW-DIALOG-TEXT": {
            state.newMessage = action.text;
            return state;
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