import React from "react";
import classes from './Message.module.css'

type MessagePropsTypes = {
    message: string
}

export function Message(props: MessagePropsTypes) {

    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}