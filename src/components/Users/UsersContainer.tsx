import React from 'react';
import {connect} from "react-redux";
import {UsersClass} from "./UsersClass";
import {FollowToggleAC, setUsersAC, UsersPageType, UserType} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    state: UsersPageType,
}

type MapDispatchPropsType = {
    followToggle: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.UsersReducer,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
      followToggle: (userID) => dispatch(FollowToggleAC(userID)),
      setUsers: (users) => dispatch(setUsersAC(users))
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);