import mainScreen from "../../img/mainScreen.png";
import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src={mainScreen} alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

