import React from 'react';
import {storeType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {FilterBarByWheelSize} from "./FilterBarByWheelSize";
import {
    filterBikesByWheelSizeAC,
    filterBikesByWheelSizeACType,
    filterWheelSizeValue
} from "../../../redux/BikesPage-reducer";

type mapStateToPropsType={

}
type mapDispatchToProps={
    filterChangeMenuBarWheelSize:(FilterWheelSizeValue: filterWheelSizeValue)=>void
}

const mapStateToProps=(state:storeType):mapStateToPropsType=>{
    return {

    }
}

const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        filterChangeMenuBarWheelSize:(FilterWheelSizeValue: filterWheelSizeValue)=>{
            dispatch(filterBikesByWheelSizeAC(FilterWheelSizeValue))
        }
    }
}

export const FilterBarByWheelSizeContainer = connect(mapStateToProps,mapDispatchToProps)(FilterBarByWheelSize)