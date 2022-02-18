import React from 'react';
import classes from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import avatar from "../../assets/img/avatar.jpg";

export const Users = (props: UsersPropsType) => {

    if(props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    }

    return (
        <div>
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