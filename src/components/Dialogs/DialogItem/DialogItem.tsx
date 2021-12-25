import React from "react";
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsTypes = {
    name: string,
    id: number,
}


export function DialogItem(props: DialogItemPropsTypes) {

    const path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} className={({isActive}) => isActive ? classes.active : ''}>{props.name}</NavLink>
        </div>
    );
}