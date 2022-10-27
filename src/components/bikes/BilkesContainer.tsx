import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {bikeType} from "../../redux/BikesPage-reducer";
import {Bikes} from "./Bikes";


type mapStateToPropsType={
    bikes:Array<bikeType>
}
type mapDispatchToProps={

}


const mapStateToProps=(state:storeType):mapStateToPropsType=>{
    return{
        bikes:state.bikesPageReducer.bike
    }
}

const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToProps=>{
    return {}
}



export const BikesContainer =connect(mapStateToProps,mapDispatchToProps)(Bikes)



