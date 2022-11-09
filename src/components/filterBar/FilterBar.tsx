import React, {useState} from 'react';
import classes from "./FilterBar.module.css";
import MyButton from "../myButton/MyButton";
import FilterBarByPrice from "./filterBarByPrice/FilterBarByPrice";
import {FilterBarByType} from "./filterBarByType/FilterBarByType";
import {FilterBarByBrand} from "./filterBarByBrand/FilterBarByBrand";
import {FilterBarByWheelSize} from "./filterBarByWheelSize/FilterBarByWheelSize";
import {FilterBarByTypeContainer} from "./filterBarByType/FilterBarByTypeContainer";
import {FilterBarByBrandContainer} from "./filterBarByBrand/FilterBarByBrandContainer";
import {FilterBarByWheelSizeContainer} from "./filterBarByWheelSize/FilterBarByWheelSizeContainer";


const FilterBar = () => {
    const [filterBarVisible, setFilterBarVisible] = useState<boolean>(true)


    /* const [filterBarByWheelSizeVisible, setFilterBarByWheelSizeVisible] = useState<boolean>(true)
     const [filterBarByTypeVisible, setFilterBarByTypeVisible] = useState<boolean>(true)
     const [filterBarByBrandVisible, setFilterBarByBrandVisible] = useState<boolean>(true)*/
    const onButtonClickHandler = () => {
        setFilterBarVisible(!filterBarVisible)
    }


    return (
        <div className={classes.filterBarContainer}>

            {filterBarVisible ? <div className={classes.filterBarMenuTrue}>
                    <div>Filter Bikes</div>

                    <div className={classes.filterBarMenuContainer}>
                        <div className={classes.filterBarMenuContainerItems}>
                            <FilterBarByPrice/>
                            <FilterBarByTypeContainer/>
                            <FilterBarByBrandContainer/>
                            <FilterBarByWheelSizeContainer/>
                        </div>

                    </div>

                    <MyButton
                        name={"<"}
                        onClick={onButtonClickHandler}
                    />
                </div>
                :
                <div className={classes.filterBarMenuFalse}>
                    <div>
                    </div>
                    <MyButton
                        name={">"}
                        onClick={onButtonClickHandler}
                    />
                </div>
            }

        </div>

    );
};

export default FilterBar;