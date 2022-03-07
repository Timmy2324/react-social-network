import React from 'react';
import {connect} from "react-redux";
import {
    FollowAC,
    setCurrentPageAC, setFetchingAC,
    setTotalCountAC,
    setUsersAC, UnFollowAC,
    UserType
} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    UnFollow: (userID: number) => void
    Follow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainerComponent extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {
            withCredentials: true,
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
            this.props.setFetching(false);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setFetching(false);
        });
    }

    render() {

        return (
            <>
                {this.props.isFetching
                ? <Preloader/>
                :<Users
                        totalUsersCount={this.props.totalUsersCount}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        follow={this.props.Follow}
                        unFollow={this.props.UnFollow}
                        setFetching={this.props.setFetching}
                    />
                }

            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.UsersReducer.users,
        pageSize: state.UsersReducer.pageSize,
        totalUsersCount: state.UsersReducer.totalUsersCount,
        currentPage: state.UsersReducer.currentPage,
        isFetching: state.UsersReducer.isFetching,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
      UnFollow: (userID) => dispatch(UnFollowAC(userID)),
      Follow: (userID) => dispatch(FollowAC(userID)),
      setUsers: (users) => dispatch(setUsersAC(users)),
      setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
      setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
      setFetching: (isFetching) => dispatch(setFetchingAC(isFetching)),
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);