import React, {useState} from 'react';
import classes from './FilterBarByWheelSize.module.css';
import {MyCheckBox} from "../../myCheckBox/MyCheckBox";
import {filterWheelSizeValue} from "../../../redux/BikesPage-reducer";

type FilterBarByWheelSizePropsType ={
    filterChangeMenuBarWheelSize:(FilterWheelSizeValue: filterWheelSizeValue)=>void
}

export const FilterBarByWheelSize = ({filterChangeMenuBarWheelSize}:FilterBarByWheelSizePropsType) => {
    const [filterBarByWheelVisible, setFilterBarByWheelVisible] = useState<boolean>(false)


return (
    <div className={classes.filterBarByWheelContainer}>
        <div>
            {filterBarByWheelVisible ? <div className={classes.filterBarByWheelVisibleTrue}>Filter by wheel <div>
                    <div className={classes.filterBarByBrandMyCheckBox}>
                      {/*  <MyCheckBox name={"27'8"}/>
                        <MyCheckBox name={'28'}/>
                        <MyCheckBox name={"29"}/>*/}
                        <button onClick={()=>filterChangeMenuBarWheelSize(27.5)}>27.5</button>
                        <button onClick={()=>filterChangeMenuBarWheelSize(28)}>28</button>
                        <button onClick={()=>filterChangeMenuBarWheelSize("all")}>all</button>
                    </div>
                </div>
                </div>
                :
                <div className={classes.filterBarByWheelVisibleFalse}>Filter by wheel</div>}
            <div className={classes.openCloseFilterBarByWheel}
                 onClick={() => setFilterBarByWheelVisible(!filterBarByWheelVisible)}>^
            </div>

        </div>
    </div>
);
};
