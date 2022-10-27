import React, {useState} from 'react';
import classes from "./FilterBarByType.module.css";

export const FilterBarByType = () => {
    const [filterBarByTypeVisible, setFilterBarByTypeVisible] = useState<boolean>(false)


    return (
        <div className={classes.filterBarByTypeContainer} onClick={()=>setFilterBarByTypeVisible(!filterBarByTypeVisible)}>
            {filterBarByTypeVisible? <div className={classes.filterBarByTypeVisibleTrue}>Filter by type</div>
                :
                <div className={classes.filterBarByTypeVisibleFalse}>Filter by type</div>}

        </div>
    );
};

