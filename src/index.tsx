import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Store} from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={Store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

