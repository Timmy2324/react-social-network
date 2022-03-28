import React from "react";
import {addMessagesAC, DialogsPageType, updateNewDialogsMessagesAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    newMessage: string
    isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage: () => void
    newMessageChange: (text: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.DialogsReducer,
        newMessage: state.DialogsReducer.newMessage,
        isAuth: state.AuthReducer.isAuth,
    }
}

const mapDispatchToProps  = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessagesAC())
        },
        newMessageChange: (text: string) => {
            dispatch(updateNewDialogsMessagesAC(text))
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);