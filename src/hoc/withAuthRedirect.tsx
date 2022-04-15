import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.AuthReducer.isAuth,
    }
}

export function withAuthRedirect<T> (Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props;
        if (!isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...restProps as T} />
    }
    return (
        connect(mapStateToProps)(RedirectComponent)
    );
}