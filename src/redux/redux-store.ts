import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";

const reducers = combineReducers({
    ProfileReducer,
    DialogsReducer
});

export type ReduxStoreType = typeof Store
export const Store = createStore(reducers);