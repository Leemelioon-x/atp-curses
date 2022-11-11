import React, {useState} from 'react';
import classes from "./FilterBarByPrice.module.css";
import SuperRange from "../../c7-SuperRange/SuperRange";


type FilterBarByPricePropsType={
    priceValue: number,
    filteredByPrice:(priceValue:number)=>void

}

const FilterBarByPrice = ({filteredByPrice,priceValue}:FilterBarByPricePropsType) => {
    const [filterBarByPriceVisible, setFilterBarByPriceVisible] = useState<boolean>(false)


return (
    <div className={classes.filterBarByPriceContainer}>
        <div>
            {filterBarByPriceVisible ? <div className={classes.filterBarByPriceVisibleTrue}>Filter by price <div>
                </div>
                {priceValue}
                <SuperRange onChangeRange={filteredByPrice} min={0} max={2000}/>
                </div>
                :
                <div className={classes.filterBarByPriceVisibleFalse}>Filter by price</div>}
            <div className={classes.openCloseFilterBarByPrice}
                 onClick={() => setFilterBarByPriceVisible(!filterBarByPriceVisible)}>^
            </div>

        </div>
    </div>
);
};

export default FilterBarByPrice;