import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";



type MyPostsPropsType = {
    post: Array<PostType>
    addPost: () => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {

    const postElements = props.post
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(newPostElement.current?.value !== '') {
            props.addPost();
        }

    }
    
    const onPostChange = () => {
        if(newPostElement.current && newPostElement.current.value !== '') {
            props.updateNewPostText(newPostElement.current.value)
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