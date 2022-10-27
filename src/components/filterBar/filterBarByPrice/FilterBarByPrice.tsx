import React, {useState} from 'react';
import classes from "./FilterBarByPrice.module.css";
type FilterBarByPricePropsType={
}

const FilterBarByPrice = (props:FilterBarByPricePropsType) => {
    const [filterBarByPriceVisible, setFilterBarByPriceVisible] = useState<boolean>(false)


    return (
        <div className={classes.filterBarByPriceContainer} onClick={()=>setFilterBarByPriceVisible(!filterBarByPriceVisible)}>
            {filterBarByPriceVisible? <div className={classes.filterBarByPriceVisibleTrue}>Filter by price</div>
                :
                <div className={classes.filterBarByPriceVisibleFalse}>Filter by price</div>}

        </div>
    );
};

export default FilterBarByPrice;