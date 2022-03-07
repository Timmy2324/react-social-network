import React, {Component} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthType, setUserDataAC} from "../../redux/auth-reducer";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    console.log(response.data.data)
                    this.props.setUserData(response.data.data);
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