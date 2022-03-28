import React, {Component} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthType, getUserData, setUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

type MapDispatchPropsType = {
    setUserData: (date: AuthType) => void,
    getUserData: () => void,
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainerComponent extends Component<HeaderPropsType, AppStateType> {

    componentDidMount() {
        this.props.getUserData();
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

export const HeaderContainer = connect(mapStateToProps, {setUserData, getUserData})(HeaderContainerComponent);