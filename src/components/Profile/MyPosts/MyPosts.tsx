import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";



type MyPostsPropsType = {
    post: Array<PostType>
}

export function MyPosts(props: MyPostsPropsType) {

    let postElements = props.post
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={classes.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}