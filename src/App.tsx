import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {addMessages, StateType, updateNewPostText} from "./redux/state";

type AppPropsType = {
    state: StateType,
    addPost: () => void,
    updateNewPostText: (text: string) => void,
    addMessages: () => void,
    updateNewDialogsMessages: (text: string) => void,

}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={updateNewPostText}
                        />}
                    />
                    <Route path="/dialogs/*" element={
                        <Dialogs
                            state={props.state.dialogsPage}
                            addMessages={props.addMessages}
                            updateNewDialogsMessages={props.updateNewDialogsMessages}
                        />}
                    />
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
