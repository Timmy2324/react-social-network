import React from "react";
import classes from "./Post.module.css";
import avatar from "../../../../img/avatar.jpg";

type PostPropsTypes = {
    message: string,
    likesCount: number,
}

export function Post(props: PostPropsTypes) {
    return (
        <div className={classes.post}>
            <img src={avatar} alt=""/>
            {props.message}
            <div>
                likes {props.likesCount}
            </div>
        </div>
    );
}