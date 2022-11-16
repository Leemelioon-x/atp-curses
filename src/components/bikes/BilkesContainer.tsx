
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {bikeType, filterBrandTypeValue, filterTypeValue, filterWheelSizeValue} from "../../redux/BikesPage-reducer";
import {Bikes} from "./Bikes";


type mapStateToPropsType={
    bikes:Array<bikeType>,
    filterTypeValue:filterTypeValue,
    filterBrandTypeValue:filterBrandTypeValue,
    filterWheelSizeValue: filterWheelSizeValue,
    searchValue:string,
    priceValue:number,
    sortedPriceValue:string


}
type mapDispatchToProps={

}


const mapStateToProps=(state:storeType):mapStateToPropsType=>{
    return{
        bikes:state.bikesPageReducer.bike,
        filterTypeValue:state.bikesPageReducer.filterTypeValue,
        filterBrandTypeValue:state.bikesPageReducer.filterBrandType,
        filterWheelSizeValue:state.bikesPageReducer.filterWheelSize,
        searchValue:state.bikesPageReducer.searchValue,
        priceValue:state.bikesPageReducer.priceValue,
        sortedPriceValue:state.bikesPageReducer.sortedPriceValue
    }
}

const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToProps=>{
    return {

    }
}



export const BikesContainer =connect(mapStateToProps,mapDispatchToProps)(Bikes)



