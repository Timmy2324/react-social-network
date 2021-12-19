import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from "./Message/Message";

export function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                <DialogItem name={'Tim'} id={'1'}/>
                <DialogItem name={'Nastya'} id={'2'}/>
                <DialogItem name={'Gena'} id={'3'}/>
                <DialogItem name={'Cheburashka'} id={'4'}/>

            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hello'}/>
                <Message message={'Hey'}/>
            </div>
        </div>
    );
}