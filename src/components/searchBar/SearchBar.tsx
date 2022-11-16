import React from 'react';
import classes from "./SearchBar.module.css";
type SearchBarPropsType={
    searchBikes:(searchValue:string)=>void
}

export const SearchBar = ({searchBikes}:SearchBarPropsType) => {


    return (
        <div className={classes.search_container}>
            <div className={classes.input_container}>
                <input type="text" className={classes.search_style} placeholder="Найти велосипед..." onChange={(e)=>searchBikes(e.currentTarget.value)}>
                    </input>
            </div>
        </div>
    );
};

