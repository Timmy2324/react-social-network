import React from 'react';
import {connect} from "react-redux";
import {
    FollowToggleAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    UserType
} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";


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

class UsersContainerComponent extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            console.log(response)
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            console.log(response)
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                followToggle={this.props.followToggle}
            />
        );
    }
}

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);