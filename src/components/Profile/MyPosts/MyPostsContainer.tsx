import React from "react";
import {
    addPostAC,
    updateNewPostTextAC,
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type MyPostsPropsType = {}

export function MyPostsContainer(props: MyPostsPropsType) {


    return (
        <StoreContext.Consumer>{
            (store) => {

                const addPost = () => {
                    store.dispatch(addPostAC());
                }

                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }

                return (
                    <MyPosts
                        posts={store.getState().ProfileReducer.posts}
                        newPostText={store.getState().ProfileReducer.newPostText}
                        updateNewPostText={(text: string) => onPostChange(text)}
                        addPost={addPost}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
}