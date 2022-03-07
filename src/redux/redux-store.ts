import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {UsersReducer} from "./users-reduser";
import {AuthReducer} from "./auth-reducer";

const rootReducer = combineReducers({
    ProfileReducer,
    DialogsReducer,
    UsersReducer,
    AuthReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type ReduxStoreType = typeof rootReducer;

export const Store = createStore(rootReducer);