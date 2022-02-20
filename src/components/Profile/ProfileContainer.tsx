import React from 'react';
import {setUserProfileAC, UserProfileType} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import axios from "axios";
import {Profile} from "./Profile";
import {useParams} from "react-router-dom";

type WrappedComponentPropsType = {
    params?: {
        userId: string,
    }
}

const withRouter = (WrappedComponent: any) => (props: any) => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

type MapStatePropsType = {
    profile: UserProfileType | null,
}

type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void,
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & WrappedComponentPropsType;

class ProfileContainerComponent extends React.Component<ProfilePropsType, AppStateType> {

    componentDidMount() {
        let userId = this.props.params?.userId;
        if (!userId){
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }


    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.ProfileReducer.profile,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setUserProfile: (profile: UserProfileType) => dispatch(setUserProfileAC(profile)),
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerComponent);

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);