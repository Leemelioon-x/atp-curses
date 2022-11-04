import React, {useState} from 'react';
import classes from "./FilterBarByPrice.module.css";
import {MyCheckBox} from "../../myCheckBox/MyCheckBox";
type FilterBarByPricePropsType={
}

const FilterBarByPrice = (props:FilterBarByPricePropsType) => {
    const [filterBarByPriceVisible, setFilterBarByPriceVisible] = useState<boolean>(false)


return (
    <div className={classes.filterBarByPriceContainer}>
        <div>
            {filterBarByPriceVisible ? <div className={classes.filterBarByPriceVisibleTrue}>Filter by price <div>
                </div>
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