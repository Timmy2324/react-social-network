import React from "react";
import {addMessagesAC, updateNewDialogsMessagesAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsPropsType = {}

export function DialogsContainer(props: DialogsPropsType) {



    return (
        <StoreContext.Consumer>{
            (store) => {

                const addMessage = () => {
                    store.dispatch(addMessagesAC());
                }

                const newMessageChange = (text: string) => {
                    store.dispatch(updateNewDialogsMessagesAC(text));
                }

                return (
                    <Dialogs
                        addMessage={addMessage}
                        newMessageChange={(text: string) => newMessageChange(text)}
                        state={store.getState().DialogsReducer}
                        newMessage={store.getState().DialogsReducer.newMessage}
                    />
                )
            }
        }
        </StoreContext.Consumer>

    )
}