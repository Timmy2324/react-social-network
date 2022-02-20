import React from "react";
import classes from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../Preloader/Preloader";
import avatar from "../../../assets/img/avatar.jpg";

type ProfileInfoPropsType = {
    profile: UserProfileType | null,
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return (<Preloader/>)
    }

    return (

        <div>
            <div className={classes.wrapper}>
                <img src={props.profile.photos.small ? props.profile.photos.small : avatar} alt=""/>
                <span>{props.profile.fullName}</span>
                <div>
                    {props.profile.aboutMe}
                </div>
            </div>
            <div className={classes.wrapper}>
                О работе
                <div>
                    {props.profile.lookingForAJob ? 'В активном поиске' : 'Уже работаю :с'}
                </div>

                {props.profile.lookingForAJobDescription && <div>{props.profile.lookingForAJobDescription}</div>}
            </div>
            <div className={classes.wrapper}>
                Контакты
                {props.profile.contacts.vk && <div><a className={classes.link} target={'_blank'} href={props.profile.contacts.vk}>vk</a></div>}
                {props.profile.contacts.facebook && <div><a className={classes.link} target={'_blank'} href={props.profile.contacts.facebook}>facebook</a></div>}
                {props.profile.contacts.website && <div><a className={classes.link} target={'_blank'} href={props.profile.contacts.website}>website</a></div>}
                {props.profile.contacts.twitter && <div><a className={classes.link} target={'_blank'} href={props.profile.contacts.twitter}>twitter</a></div>}
                {props.profile.contacts.instagram && <div><a className={classes.link} target={'_blank'} href={props.profile.contacts.instagram}>instagram</a></div>}
                {props.profile.contacts.youtube && <div><a className={classes.link} target={'_blank'} href={props.profile.contacts.youtube}>youtube</a></div>}
                {props.profile.contacts.github && <div><a className={classes.link} target={'_blank'} href={props.profile.contacts.github}>github</a></div>}
                {props.profile.contacts.mainLink && <div><a className={classes.link} target={'_blank'} href={props.profile.contacts.mainLink}>mainLink</a></div>}
            </div>
        </div>
    );
}

