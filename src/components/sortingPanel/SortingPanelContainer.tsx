
import {Dispatch} from "redux";
import {storeType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {SortingPanel} from "./SortingPanel";
import {sortedPriceAC} from "../../redux/BikesPage-reducer";


type mapStateToPropsType={
    sortedPrice:string
}

type mapDispatchToProps={
    setSortedPriceValue:(sortedPriceValue:string)=>void
}

const mapStateToProps=(state:storeType):mapStateToPropsType=>{
    return{
        sortedPrice:state.bikesPageReducer.sortedPriceValue
    }
}

const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToProps=>{
    return {
        setSortedPriceValue:(sortedPriceValue:string)=>{
            dispatch(sortedPriceAC(sortedPriceValue))
        }
    }
}

export const SortingPanelContainer = connect(mapStateToProps,mapDispatchToProps)(SortingPanel)