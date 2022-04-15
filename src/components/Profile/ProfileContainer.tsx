import React from 'react';
import {getUserProfile, setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    getUserProfile: (userID: string) => void,
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & WrappedComponentPropsType;

class ProfileContainerComponent extends React.Component<ProfilePropsType, AppStateType> {

    componentDidMount() {
        let userId = this.props.params?.userId;
        if (!userId){
            userId = '2';
        }
        this.props.getUserProfile(userId);
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

let WithUrlDataContainerComponent = withRouter(ProfileContainerComponent);

export const ProfileContainer = withAuthRedirect(connect(mapStateToProps, {setUserProfile, getUserProfile})(WithUrlDataContainerComponent));