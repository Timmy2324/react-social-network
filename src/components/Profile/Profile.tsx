import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {Navigate} from "react-router-dom";


export function Profile(props: ProfilePropsType) {

    if (!props.isAuth) {
        console.log(props.isAuth)
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}