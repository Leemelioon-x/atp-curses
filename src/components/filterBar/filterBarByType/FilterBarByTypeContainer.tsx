import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {storeType} from "../../../redux/redux-store";
import {FilterBarByType} from "./FilterBarByType";
import {bikeType, changeBikesFilterTypeAC} from "../../../redux/BikesPage-reducer";


type mapStateToPropsType={
    bikesFilterType:Array<bikeType>
}
type mapDispatchToProps={
    filterChangeMenuBarType:(filterType:string)=>void
}


const mapStateToProps=(state:storeType):mapStateToPropsType=>{
    return{
        bikesFilterType:state.bikesPageReducer.bike
    }
}

const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToProps=>{
    return {
        filterChangeMenuBarType:(filterType:string)=>{
            console.log(filterType)
                dispatch(changeBikesFilterTypeAC(filterType))
           }
    }
}



export const FilterBarByTypeContainer =connect(mapStateToProps,mapDispatchToProps)(FilterBarByType)



