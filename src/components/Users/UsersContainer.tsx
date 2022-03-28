import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage, setFetching,
    setTotalCount,
    setUsers, unFollow,
    UserType
} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setFetching: (isFetching: boolean) => void
    getUsers: (pageSize: number, currentPage: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainerComponent extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(this.props.pageSize, pageNumber)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setFetching(false);
            });
    }

    render() {

        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        setFetching={this.props.setFetching}
                        followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.UsersReducer.followingInProgress,
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalCount,
    setFetching,
    getUsers,
    follow,
    unFollow,
})(UsersContainerComponent);