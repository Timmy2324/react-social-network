import mainScreen from "../../img/mainScreen.png";
import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: actionType) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                post={props.state.posts}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />
        </div>
    );
}