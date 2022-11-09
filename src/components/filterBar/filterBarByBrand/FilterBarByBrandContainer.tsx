import React from 'react';
import {connect} from "react-redux";
import {Bikes} from "../../bikes/Bikes";
import {bikeType, filterBikesByBrandAC, filterBrandTypeValue} from "../../../redux/BikesPage-reducer";
import {storeType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {FilterBarByBrand} from "./FilterBarByBrand";

type mapStateToPropsType={

}
type mapDispatchToProps={
    filterChangeMenuBarByBrand:(filterBikesByBrand:filterBrandTypeValue)=>void
}


const mapStateToProps=(state:storeType):mapStateToPropsType=>{
    return{

    }
}

const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToProps=>{
    return {
        filterChangeMenuBarByBrand:(FilterBrandValue:filterBrandTypeValue)=>{
            dispatch(filterBikesByBrandAC(FilterBrandValue))
        }
    }
}



export const FilterBarByBrandContainer =connect(mapStateToProps,mapDispatchToProps)(FilterBarByBrand)