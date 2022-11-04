import React, {useState} from 'react';
import classes from './FilterBarByBrand.module.css';
import {MyCheckBox} from "../../myCheckBox/MyCheckBox";


export const FilterBarByBrand = () => {
    const [filterBarByBrandVisible, setFilterBarByBrandVisible] = useState<boolean>(false)

return (
    <div className={classes.filterBarByBrandContainer}>
        <div>
            {filterBarByBrandVisible ? <div className={classes.filterBarByBrandVisibleTrue}>Filter by brand <div>
                    <div className={classes.filterBarByBrandMyCheckBox}>
                        <MyCheckBox name={'AIST'}/>
                        <MyCheckBox name={'FORWARD'}/>
                        <MyCheckBox name={"BAZ"}/>
                    </div>
                </div>
                </div>
                :
                <div className={classes.filterBarByBrandVisibleFalse}>Filter by brand</div>}
            <div className={classes.openCloseFilterBarByBrand}
                 onClick={() => setFilterBarByBrandVisible(!filterBarByBrandVisible)}>^
            </div>

        </div>
    </div>
);
};