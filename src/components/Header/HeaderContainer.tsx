import React, {Component} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthType, setUserDataAC} from "../../redux/auth-reducer";
import {auth} from "../../api/api";

type MapStatePropsType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

type MapDispatchPropsType = {
    setUserData: (date: AuthType) => void,
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainerComponent extends Component<HeaderPropsType, AppStateType> {

    componentDidMount() {
        auth()
            .then((data) => {
                if (data.data.resultCode === 0) {
                    this.props.setUserData(data.data);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        id: state.AuthReducer.id,
        email: state.AuthReducer.email,
        login: state.AuthReducer.login,
        isAuth: state.AuthReducer.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setUserData: (data) => dispatch(setUserDataAC(data)),
    }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerComponent);