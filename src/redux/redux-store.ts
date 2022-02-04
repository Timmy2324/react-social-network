import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {UsersReducer} from "./users-reduser";

const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer,
    UsersReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type ReduxStoreType = typeof rootReducer;

export const Store = createStore(rootReducer);