import logo from "../../assets/img/logo.png";
import React from "react";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

export function Header(props: HeaderPropsType) {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={classes.loginBlock}> {props.isAuth ? props.login : <NavLink to={`/login`}>Login</NavLink>}</div>
        </header>
    );
}