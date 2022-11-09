import React, {useState} from 'react';
import classes from './FilterBarByBrand.module.css';
import {MyCheckBox} from "../../myCheckBox/MyCheckBox";
import {filterBrandTypeValue} from "../../../redux/BikesPage-reducer";

type FilterBarByBrandPropsType={
    filterChangeMenuBarByBrand:(filterBikesByBrand:filterBrandTypeValue)=>void
}


export const FilterBarByBrand = ({filterChangeMenuBarByBrand}:FilterBarByBrandPropsType) => {
    const [filterBarByBrandVisible, setFilterBarByBrandVisible] = useState<boolean>(false)

return (
    <div className={classes.filterBarByBrandContainer}>
        <div>
            {filterBarByBrandVisible ? <div className={classes.filterBarByBrandVisibleTrue}>Filter by brand <div>
                    <div className={classes.filterBarByBrandMyCheckBox}>
                      {/*  <MyCheckBox name={'AIST'}/>
                        <MyCheckBox name={'FORWARD'}/>
                        <MyCheckBox name={"BAZ"}/>*/}
                        <button onClick={()=>filterChangeMenuBarByBrand("AIST")}>AIST</button>
                        <button onClick={()=>filterChangeMenuBarByBrand("FORWARD")}>FORWARD</button>
                        <button onClick={()=>filterChangeMenuBarByBrand("all")}>all</button>
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