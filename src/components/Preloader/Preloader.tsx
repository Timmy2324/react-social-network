import React from 'react';
import classes from './Preloader.module.css';

export const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <div className={classes.lds_dual_ring}/>
        </div>

    );
};