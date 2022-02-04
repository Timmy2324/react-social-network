import logo from "../../assets/img/logo.png";
import React from "react";
import classes from "./Header.module.css"

export function Header() {

    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>
        </header>
    );
}