import React from "react";
import {
    addPost, ProfilePageType,
    updateNewPostText,
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    profilePage: ProfilePageType
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.ProfileReducer,
        newPostText: state.ProfileReducer.newPostText,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);