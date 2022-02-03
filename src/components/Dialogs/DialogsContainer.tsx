import React from "react";
import {addMessagesAC, updateNewDialogsMessagesAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {ReduxStoreType} from "../../redux/redux-store";



type DialogsPropsType = {
    store: ReduxStoreType
}

export function DialogsContainer(props: DialogsPropsType) {

    const addMessage = () => {
        props.store.dispatch(addMessagesAC());
    }

    const newMessageChange = (text: string) => {
        props.store.dispatch(updateNewDialogsMessagesAC(text));
    }

    return (
        <Dialogs
            addMessage={addMessage}
            newMessageChange={(text: string) => newMessageChange(text)}
            state={props.store.getState().DialogsReducer}
            newMessage={props.store.getState().DialogsReducer.newMessage}
        />
    );
}