import React from 'react';
import {bikeType, filterBrandTypeValue, filterTypeValue, filterWheelSizeValue} from "../../redux/BikesPage-reducer";
import classes from "./Bikes.module.css";

type BikesPropsType = {
    bikes: Array<bikeType>,
    filterTypeValue: filterTypeValue,
    filterBrandTypeValue: filterBrandTypeValue,
    filterWheelSizeValue: filterWheelSizeValue,
    searchValue:string,
    priceValue:number,
    sortedPriceValue:string
}

export const Bikes = ({bikes, filterTypeValue, filterBrandTypeValue, filterWheelSizeValue,searchValue,priceValue,sortedPriceValue}: BikesPropsType) => {

    bikes = filterTypeValue === "all" ? [...bikes] : bikes.filter(el => el.type === filterTypeValue)
    bikes = filterBrandTypeValue === "all" ? [...bikes] : bikes.filter(el => el.brand === filterBrandTypeValue)
    bikes = filterWheelSizeValue === "all" ? [...bikes] : bikes.filter((el, index) => el.specifications[0].wheelDiameter === filterWheelSizeValue)
    bikes = priceValue ===0? [...bikes] : bikes.filter(el=>el.price>=priceValue)
    bikes = bikes.filter(el=>el.name.toLowerCase().includes(searchValue.toLowerCase()))







    return (
        <div>
            {bikes.map(bike => {
                return (
                    <div key={bike.id} className={classes.bikes_container}> {bike.name}
                        <div className={classes.bike_container}>{bike.price} руб </div>
                        <div>
                        <img src={bike.image}/>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

