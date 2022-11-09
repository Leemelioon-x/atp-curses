import React, {useState} from 'react';
import classes from "./FilterBarByType.module.css";
import {MyCheckBox} from "../../myCheckBox/MyCheckBox";
import {bikeType, filterTypeValue} from "../../../redux/BikesPage-reducer";

type FilterBarByTypePropsType = {

    filterChangeMenuBarType:(filterType:filterTypeValue)=>void
}

export const FilterBarByType = ({filterChangeMenuBarType}: FilterBarByTypePropsType) => {
    const [filterBarByTypeVisible, setFilterBarByTypeVisible] = useState<boolean>(false)


    return (
        <div className={classes.filterBarByTypeContainer}>
            <div>
                {filterBarByTypeVisible ? <div className={classes.filterBarByTypeVisibleTrue}>Filter by type <div>
                        <div className={classes.filterBarByTypeMyCheckBox}>
                       {/*     <MyCheckBox name={'urban'} onClick={()=>filterChangeMenuBarType("urban")}/>
                            <MyCheckBox name={'hybrid'} onClick={()=>filterChangeMenuBarType("hybrid")}/>
                            <MyCheckBox name={"sport"} onClick={()=>filterChangeMenuBarType("sport")}/>*/}
                            <button onClick={()=>filterChangeMenuBarType("urban")}>urban</button>
                            <button onClick={()=>filterChangeMenuBarType("hybrid")}>hybrid</button>
                            <button onClick={()=>filterChangeMenuBarType("urban,hybrid")}>urban,hybrid</button>
                            <button onClick={()=>filterChangeMenuBarType("all")}>all</button>
                        </div>
                    </div>
                    </div>
                    :
                    <div className={classes.filterBarByTypeVisibleFalse}>Filter by type</div>}
                <div className={classes.openCloseFilterBarByType}
                     onClick={() => setFilterBarByTypeVisible(!filterBarByTypeVisible)}>^
                </div>

            </div>
        </div>
    );
};


