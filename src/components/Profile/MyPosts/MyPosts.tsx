import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export function MyPosts() {
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
                <Post message={'Hey, how are you?'} likesCount={10}/>
                <Post message={'Its my first post'} likesCount={5}/>
            </div>
        </div>
    );
}