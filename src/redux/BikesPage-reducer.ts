import {data} from "./data";

const CHANGE_BIKES_FILTER_TYPE = "CHANGE_BIKES_FILTER_TYPE";
const FILTER_BIKES_BY_BRAND = "FILTER_BIKES_BY_BRAND";
const FILTER_BIKES_BY_WHEEL_SIZE = "FILTER_BIKES_BY_WHEEL_SIZE";
const BIKES_SEARCH = "BIKES_SEARCH";
const SORTED_PRICE="SORTED_PRICE";
const FILTER_PRICE="FILTER_PRICE"

export type initialStateType = {
    bike: Array<bikeType>,
    filterTypeValue: filterTypeValue,
    filterBrandType: filterBrandTypeValue,
    filterWheelSize: filterWheelSizeValue,
    searchValue: string,
    sortedPriceValue:string,
    priceValue:number
}
export type bikeType = {
    id: string,
    name: string,
    price: number,
    brand: string,
    type: string,
    model: string,
    image: string,
    specifications: Array<specificationsType>
}
export type specificationsType = {
    frame: string,
    brakes: string,
    fork: string,
    wheelDiameter: number
}
const initialState: initialStateType = data
type changeBikesFilterACType = {
    type: "CHANGE_BIKES_FILTER_TYPE"
    FilterTypeValue: filterTypeValue
}
type filterBikesByBrandACType = {
    type: "FILTER_BIKES_BY_BRAND"
    FilterBrandValue: filterBrandTypeValue
}
export type filterBikesByWheelSizeACType = {
    type: "FILTER_BIKES_BY_WHEEL_SIZE"
    FilterWheelSizeValue: filterWheelSizeValue
}
type bikesSearchACType = {
    type: "BIKES_SEARCH",
    searchValue: string
}
type sortedPriceACType={
    type: "SORTED_PRICE" ,
    sortedPriceValue:string
}
type filterPriceACType={
    type: "FILTER_PRICE" ,
    PriceValue:number
}


export type filterTypeValue = "urban" | "hybrid" | "urban,hybrid" | "all"
export type filterBrandTypeValue = "AIST" | "FORWARD" | "all"
export type filterWheelSizeValue = 27.5 | 28 | "all"
/*export type sortedPriceValue="Цена(сначала дешевые)"|"Цена(сначала дорогие)"|"all"*/


type ActionsType = changeBikesFilterACType | filterBikesByBrandACType | filterBikesByWheelSizeACType | bikesSearchACType|sortedPriceACType|filterPriceACType
export const bikesPageReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "CHANGE_BIKES_FILTER_TYPE":
            //менять с помощью экшенов
            return {
                ...state,
                filterTypeValue: action.FilterTypeValue
            }
        case "FILTER_BIKES_BY_BRAND":

            return {
                ...state,
                filterBrandType: action.FilterBrandValue
            }
        case "FILTER_BIKES_BY_WHEEL_SIZE":

            return {
                ...state,
                filterWheelSize: action.FilterWheelSizeValue
            }
        case "BIKES_SEARCH":

            return{
                ...state,
                searchValue:action.searchValue
            }
        case "SORTED_PRICE":
            return {
                ...state,
                searchValue:action.sortedPriceValue
            }
        case "FILTER_PRICE":
            console.log(state.priceValue)
            return {
                ...state,
                priceValue:action.PriceValue
            }


        default:
            return state
    }
}

export const changeBikesFilterTypeAC = (FilterTypeValue: filterTypeValue): changeBikesFilterACType => {
    return {
        type: CHANGE_BIKES_FILTER_TYPE, FilterTypeValue
    } as const
}
export const filterBikesByBrandAC = (FilterBrandValue: filterBrandTypeValue): filterBikesByBrandACType => {
    return {
        type: FILTER_BIKES_BY_BRAND, FilterBrandValue
    } as const
}
export const filterBikesByWheelSizeAC = (FilterWheelSizeValue: filterWheelSizeValue): filterBikesByWheelSizeACType => {
    return {
        type: FILTER_BIKES_BY_WHEEL_SIZE, FilterWheelSizeValue
    } as const
}
export const bikesSearchAC = (searchValue: string): bikesSearchACType => {
    return {
        type: BIKES_SEARCH, searchValue
    } as const
}
export const sortedPriceAC = (sortedPriceValue: string): sortedPriceACType => {
    return {
        type: SORTED_PRICE, sortedPriceValue
    } as const
}
export const filterPriceAC = (PriceValue: number): filterPriceACType => {
    return {
        type: FILTER_PRICE, PriceValue
    } as const
}


