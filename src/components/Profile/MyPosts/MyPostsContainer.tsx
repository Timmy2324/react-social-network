import React from "react";
import {
    addPostAC, ProfilePageType,
    updateNewPostTextAC,
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import { Dispatch } from "redux";
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

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);