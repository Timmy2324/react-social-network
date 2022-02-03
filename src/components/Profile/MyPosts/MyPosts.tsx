import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {GeneralActionType, PostType} from "../../../redux/store";
import {
    addPostAC,
    updateNewPostTextAC,
} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    post: Array<PostType>
    dispatch: (action: GeneralActionType) => void
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {

    const postElements = props.post
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(props.newPostText) {
            props.dispatch(addPostAC());
        }

    }
    
    const onPostChange = () => {
        if(newPostElement.current) {
            props.dispatch(updateNewPostTextAC(newPostElement.current.value))
        }
    }

    return (
        <div className={classes.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}