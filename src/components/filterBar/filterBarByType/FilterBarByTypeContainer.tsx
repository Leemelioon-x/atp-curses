import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {storeType} from "../../../redux/redux-store";
import {FilterBarByType} from "./FilterBarByType";
import {bikeType, changeBikesFilterTypeAC, filterTypeValue} from "../../../redux/BikesPage-reducer";


type mapStateToPropsType={

}
type mapDispatchToProps={
    filterChangeMenuBarType:(filterType:filterTypeValue)=>void
}


const mapStateToProps=(state:storeType):mapStateToPropsType=>{
    return{
    }
}

const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToProps=>{
    return {
        filterChangeMenuBarType:(filterTypeValue:filterTypeValue)=>{
                dispatch(changeBikesFilterTypeAC(filterTypeValue))
           }
    }
}



export const FilterBarByTypeContainer =connect(mapStateToProps,mapDispatchToProps)(FilterBarByType)



