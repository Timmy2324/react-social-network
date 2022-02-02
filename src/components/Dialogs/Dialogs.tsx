import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {addMessagesAC, DialogsPageType, updateNewDialogsMessagesAC} from "../../redux/state";



type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: any) => void
}

export function Dialogs(props: DialogsPropsType) {

    const addMessage = () => {
        if(props.state.newMessage !== '') {
            props.dispatch(addMessagesAC());
        }
    };

    const newMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget && e.currentTarget.value !== '') {
            props.dispatch(updateNewDialogsMessagesAC(e.currentTarget.value))
        }
    }

    let dialogsElements = props.state.dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = props.state.messages
        .map((m) => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div>
                    <div>
                        <textarea onChange={(e) => newMessageChange(e)} value={props.state.newMessage}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}