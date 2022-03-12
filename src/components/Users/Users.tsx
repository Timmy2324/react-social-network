import React from 'react';
import classes from './Users.module.css';
import avatar from "../../assets/img/avatar.jpg";
import {UserType} from "../../redux/users-reduser";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: Array<UserType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    setFetching: (isFetching: boolean) => void,
    followingInProgress: Array<number>,
    toggleFollowingInProgress: (userID: number, toggle: boolean) => void,
}

export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map((page, index) => {
                    return (<span
                        key={index}
                        className={props.currentPage === page ? classes.selectPage : ''}
                        onClick={() => props.onPageChanged(page)}
                    >
                            {page}
                        </span>)
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={classes.photo}
                                     src={user.photos.small !== null ? user.photos.small : avatar} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.toggleFollowingInProgress(user.id, true);
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '4d083553-cac7-4ff8-a958-b1da053def74',
                                            }
                                        })
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.unFollow(user.id);
                                                }
                                                props.toggleFollowingInProgress(user.id, false);
                                            })

                                    }}>UnFollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.toggleFollowingInProgress(user.id, true);
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '4d083553-cac7-4ff8-a958-b1da053def74',
                                            }
                                        })
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(user.id);
                                                }
                                                props.toggleFollowingInProgress(user.id, false);
                                            })

                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </div>)
            }
        </div>
    );
};