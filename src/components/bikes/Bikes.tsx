import React from 'react';
import {bikeType} from "../../redux/BikesPage-reducer";
import classes from "./Bikes.module.css";

type BikesPropsType = {
    bikes: Array<bikeType>
}

export const Bikes = ({bikes}: BikesPropsType) => {
    return (
        <div>
            {bikes.map((bike, index) => (
                bike && <div key={bike.id} className={bike && classes.bikes_container}> {bike.name}
                    <div className={classes.bike_container}>{bike.price}</div>
                </div>
            ))}
        </div>
    );
};

