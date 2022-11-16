import React, {useState} from 'react';
import SuperSelect from "../superSelect/SuperSelect";


type SortingPanelPropsType={
    sortedPrice:string,
    setSortedPriceValue:(sortedPriceValue:string)=>void
}

export const SortingPanel = ({sortedPrice,setSortedPriceValue}:SortingPanelPropsType) => {
    const sortedValue=["Цена(сначала дешевые)", "Цена(сначала дорогие)","all"]
    const [sortedPriceValue,setSortedPriceValuee]=useState(sortedValue[2])

    return (
      <SuperSelect options={sortedValue} value={sortedPriceValue} onChangeOption={setSortedPriceValuee}/>
    );
};

