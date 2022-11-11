import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {storeType} from "../../../redux/redux-store";
import FilterBarByPrice from "./FilterBarByPrice";
import {filterPriceAC} from "../../../redux/BikesPage-reducer";




type mapStateToPropsType={
 priceValue: number
}
type mapDispatchToProps={
   filteredByPrice:(priceValue:number)=>void
}


const mapStateToProps=(state:storeType):mapStateToPropsType=>{
    return{
        priceValue:state.bikesPageReducer.priceValue
    }
}

const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToProps=>{
    return {
        filteredByPrice:(priceValue:number)=>{
            dispatch(filterPriceAC(priceValue))
        }
    }
}



export const FilterPriceContainer =connect(mapStateToProps,mapDispatchToProps)(FilterBarByPrice)



