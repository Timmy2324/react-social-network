import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ReduxStoreType, Store} from "./redux/redux-store";
import {StoreContext} from "./StoreContext";

export const rerenderEntireTree = (store: ReduxStoreType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App
                        dispatch={Store.dispatch.bind(store)}
                    />
                </StoreContext.Provider>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(Store);

Store.subscribe(() => rerenderEntireTree(Store))