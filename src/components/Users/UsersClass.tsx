import React from "react";
import classes from "./Users.module.css";
import avatar from "../../assets/img/avatar.jpg";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import {AppStateType} from "../../redux/redux-store";


export class UsersClass extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.state.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={classes.photo} src={user.photos.small !== null ? user.photos.small : avatar} alt=""/>
                        </div>
                        <div>
                            <button onClick={() => this.props.followToggle(user.id)}>{user.followed ? 'UnFollow' : 'Follow'}</button>
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
    }
}