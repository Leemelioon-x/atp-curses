import React, {useState} from 'react';
import SuperSelect from "../superSelect/SuperSelect";
import {sortedPriceValue} from "../../redux/BikesPage-reducer";

type SortingPanelPropsType={
    sortedPrice:sortedPriceValue,
    setSortedPriceValue:(sortedPriceValue:sortedPriceValue)=>void
}

export const SortingPanel = ({sortedPrice,setSortedPriceValue}:SortingPanelPropsType) => {
    const sortedValue=["Цена(сначала дешевые)", "Цена(сначала дорогие)","all"]
    const [sortedPriceValue,setSortedPriceValuee]=useState(sortedValue[2])

    return (
        <div>
        <SuperSelect options={sortedValue} value={sortedPriceValue} onChangeOption={setSortedPriceValuee}/>
       {/* <SuperSelect options={sortedValue} value={sortedPrice} onChangeOption={setSortedPriceValue}/>*/}
        </div>
    );
};

