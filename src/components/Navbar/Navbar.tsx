import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export function Navbar() {

    return (
            <nav className={classes.navbar}>
                <div className={classes.item}>
                    <NavLink to="/profile" className={({isActive}) => isActive ? classes.active : ''}>
                        Profile
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" className={({isActive}) => isActive ? classes.active : ''}>
                        Dialogs
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/users" className={({isActive}) => isActive ? classes.active : ''}>
                        Users
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" className={({isActive}) => isActive ? classes.active : ''}>
                        News
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" className={({isActive}) => isActive ? classes.active : ''}>
                        Music
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" className={({isActive}) => isActive ? classes.active : ''}>
                        Settings
                    </NavLink>
                </div>
            </nav>
    );
}
