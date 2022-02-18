import React from 'react';
import classes from './Users.module.css';
import avatar from "../../assets/img/avatar.jpg";
import {UserType} from "../../redux/users-reduser";

type UsersPropsType = {
    users: Array<UserType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) =>void,
    followToggle: (userID: number) => void
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
                            {page }
                        </span>)
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={classes.photo} src={user.photos.small !== null ? user.photos.small : avatar} alt=""/>
                        </div>
                        <div>
                            <button onClick={() => props.followToggle(user.id)}>{user.followed ? 'UnFollow' : 'Follow'}</button>
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