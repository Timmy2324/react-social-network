import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";

const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type ReduxStoreType = typeof rootReducer;

export const Store = createStore(rootReducer);