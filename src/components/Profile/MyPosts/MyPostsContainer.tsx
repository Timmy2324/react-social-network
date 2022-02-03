import React from "react";
import {
    addPostAC,
    updateNewPostTextAC,
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    store: ReduxStoreType
}

export function MyPostsContainer(props: MyPostsPropsType) {

    const addPost = () => {
        props.store.dispatch(addPostAC());
    }
    
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts
            posts={props.store.getState().ProfileReducer.posts}
            newPostText={props.store.getState().ProfileReducer.newPostText}
            updateNewPostText={(text: string) => onPostChange(text)}
            addPost={addPost}
        />
    )
}