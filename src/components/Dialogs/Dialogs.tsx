import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";



type DialogsPropsType = {
    state: DialogsPageType
    addMessages: () => void
    updateNewDialogsMessages: (text: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    const newMessage = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        if(newMessage.current?.value !== '') {
            props.addMessages();
        }
    };

    const newMessageChange = () => {
        if(newMessage.current && newMessage.current.value !== '') {
            props.updateNewDialogsMessages(newMessage.current.value)
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
                    <textarea onChange={newMessageChange} ref={newMessage} value={props.state.newMessage}></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}