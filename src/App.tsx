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
import {ReduxStoreType} from "./redux/redux-store";

type AppPropsType = {
    store: ReduxStoreType,
    dispatch: (action: any) => void
}

function App(props: AppPropsType) {

    const state = props.store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            state={state.ProfileReducer}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path="/dialogs/*" element={
                        <Dialogs
                            state={state.DialogsReducer}
                            dispatch={props.dispatch}
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
