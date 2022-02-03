import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export function MyPosts(props: MyPostsPropsType) {

    const postElements = props.posts
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    const addPost = () => {
        if(props.newPostText) {
            props.addPost();
        }
    }
    
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget) {
            props.updateNewPostText(e.currentTarget.value);
        }
    }

    return (
        <div className={classes.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={(e) => onPostChange(e)} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}