import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, addMessages, StateType, updateNewDialogsMessages, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addMessages={addMessages}
                    updateNewDialogsMessages={updateNewDialogsMessages}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}