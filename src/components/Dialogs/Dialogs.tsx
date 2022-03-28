import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Navigate} from "react-router-dom";


export function Dialogs(props: DialogsPropsType) {
    if (!props.isAuth) {
        console.log(props.isAuth)
        return <Navigate to={'/login'}/>
    }

    const addMessage = () => {
        if(props.newMessage !== '') {
            props.addMessage();
        }
    };

    const newMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget) {
            props.newMessageChange(e.currentTarget.value);
        }
    }

    let dialogsElements = props.dialogsPage.dialogs
        .map((d, index) => <DialogItem key={index} name={d.name} id={d.id}/>);

    let messageElements = props.dialogsPage.messages
        .map((m, index) => <Message key={index} message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div>
                    <div>
                        <textarea onChange={(e) => newMessageChange(e)} value={props.newMessage}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}