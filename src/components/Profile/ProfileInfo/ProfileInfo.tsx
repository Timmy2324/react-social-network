import mainScreen from "../../../assets/img/mainScreen.png";
import React from "react";
import classes from "./ProfileInfo.module.css";

type ProfileInfoPropsType = {

}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div>
            <div>
                <img className={classes.mainScreen} src={mainScreen} alt=""/>
            </div>
            <div className={classes.description_block}>
                ava + description
            </div>
        </div>
    );
}

