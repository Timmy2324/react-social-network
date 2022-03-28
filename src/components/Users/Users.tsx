import React from 'react';
import classes from './Users.module.css';
import avatar from "../../assets/img/avatar.jpg";
import {UserType} from "../../redux/users-reduser";
import {Navigate, NavLink} from "react-router-dom";

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
    isAuth: boolean,
}

export const Users = (props: UsersPropsType) => {

    if (!props.isAuth) {
        console.log(props.isAuth)
        return <Navigate to={'/login'}/>
    }

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
                                        props.unFollow(user.id);
                                    }}>UnFollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.follow(user.id);
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