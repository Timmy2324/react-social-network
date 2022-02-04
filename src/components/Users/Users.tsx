import React from 'react';
import classes from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {
                props.state.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={classes.photo} src={user.photo} alt=""/>
                        </div>
                        <div>
                            <button onClick={() => props.followToggle(user.id)}>{user.isFollow ? 'UnFollow' : 'Follow'}</button>
                        </div>
                    </span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    );
};