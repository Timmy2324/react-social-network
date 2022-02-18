import React from 'react';
import {connect} from "react-redux";
import {UsersClass} from "./UsersClass";
import {
    FollowToggleAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    UsersPageType,
    UserType
} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchPropsType = {
    followToggle: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.UsersReducer.users,
        pageSize: state.UsersReducer.pageSize,
        totalUsersCount: state.UsersReducer.totalUsersCount,
        currentPage: state.UsersReducer.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
      followToggle: (userID) => dispatch(FollowToggleAC(userID)),
      setUsers: (users) => dispatch(setUsersAC(users)),
      setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
      setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);