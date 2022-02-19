import React from 'react';
import {setUserProfileAC, UserProfileType} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import axios from "axios";
import {Profile} from "./Profile";

type MapStateToPropsType = {
    profile: UserProfileType | null,
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void,
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType;

class ProfileContainerComponent extends React.Component<ProfilePropsType, AppStateType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <>
                <Profile {...this.props}/>
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.ProfileReducer.profile,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (profile: UserProfileType) => dispatch(setUserProfileAC(profile)),
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerComponent);