import {v1} from "uuid";

const CHANGE_BIKES_FILTER_TYPE="CHANGE_BIKES_FILTER_TYPE";
const RETURN_ALL_BIKES_FILTER_TYPE="RETURN_ALL_BIKES_FILTER_TYPE"
const bikes =[
    {id:v1(),name:"AIST Cross1.0",price:1130,brand:"AIST",type:"urban",model:"Cross",image:"http://sprintvelo.by/upload/iblock/36a/36a8b88db0959331e861a58d13dc4465.jpeg",specifications:[
            {frame:"aluminum",brakes:"Tektro (MD-M280)",fork:"depreciation",wheelDiameter:28}
        ]},
    {id:v1(),name:"AIST Cross2.0",price:1230,brand:"AIST",type:"urban",model:"Cross",image:"http://sprintvelo.by/upload/iblock/28d/28de8326e5a57503c4a5e8465d9a250f.jpg",specifications:[
            {frame:"aluminum",brakes:"Tektro (MD-M300)",fork:"depreciation",wheelDiameter:28}
        ]},
    {id:v1(),name:"AIST Cross3.0",price:1340,brand:"AIST",type:"hybrid",model:"Cross",image:"http://sprintvelo.by/upload/iblock/a66/a66bef66619fd201e454a13bbba15a83.jpg",specifications:[
            {frame:"aluminum",brakes:"Tektro (MD-M330)",fork:"depreciation",wheelDiameter:28}
        ]},
    {id:v1(),name:"FORWARD APACHE 27,5 1.0",price:1085,brand:"FORWARD",type:"hybrid",model:"APACHE 27,5 3.0 disc",image:"http://sprintvelo.by/upload/iblock/885/8858dbd7ebad575a6b142c21b265c259.jpg",specifications:[
            {frame:"aluminum",brakes:"Promax TX-117",fork:"FWD 286",wheelDiameter:27.5}
        ]},
    {id:v1(),name:"FORWARD APACHE 27,5 3.0 disc",price:1220,brand:"FORWARD",type:"urban,hybrid",model:"APACHE 27,5 3.0 disc",image:"http://sprintvelo.by/upload/iblock/0cd/0cdcd99898576616aae79fe97f10758e.jpg",specifications:[
            {frame:"aluminum",brakes:"X-Spark HD-M220",fork:"FWD 286",wheelDiameter:27.5}
        ]},
    {id:v1(),name:"AIST Cross1.0",price:1130,brand:"AIST",type:"urban,hybrid",model:"Cross",image:"http://sprintvelo.by/upload/iblock/36a/36a8b88db0959331e861a58d13dc4465.jpeg",specifications:[
            {frame:"aluminum",brakes:"Tektro (MD-M280)",fork:"depreciation",wheelDiameter:28}
        ]},
    {id:v1(),name:"AIST Cross2.0",price:1230,brand:"AIST",type:"urban,hybrid",model:"Cross",image:"http://sprintvelo.by/upload/iblock/28d/28de8326e5a57503c4a5e8465d9a250f.jpg",specifications:[
            {frame:"aluminum",brakes:"Tektro (MD-M300)",fork:"depreciation",wheelDiameter:28}
        ]},
    {id:v1(),name:"AIST Cross3.0",price:1340,brand:"AIST",type:"urban,hybrid",model:"Cross",image:"http://sprintvelo.by/upload/iblock/a66/a66bef66619fd201e454a13bbba15a83.jpg",specifications:[
            {frame:"aluminum",brakes:"Tektro (MD-M330)",fork:"depreciation",wheelDiameter:28}
        ]},
    {id:v1(),name:"FORWARD APACHE 27,5 1.0",price:1085,brand:"FORWARD",type:"urban,hybrid",model:"APACHE 27,5 3.0 disc",image:"http://sprintvelo.by/upload/iblock/885/8858dbd7ebad575a6b142c21b265c259.jpg",specifications:[
            {frame:"aluminum",brakes:"Promax TX-117",fork:"FWD 286",wheelDiameter:27.5}
        ]},
    {id:v1(),name:"AIST Cross1.0",price:1130,brand:"AIST",type:"urban,hybrid",model:"Cross",image:"http://sprintvelo.by/upload/iblock/36a/36a8b88db0959331e861a58d13dc4465.jpeg",specifications:[
            {frame:"aluminum",brakes:"Tektro (MD-M280)",fork:"depreciation",wheelDiameter:28}
        ]},
]

type initialStateType={
    bike:Array<bikeType>
}
export type bikeType={
    id:string,
    name:string,
    price:number,
    brand:string,
    type:string,
    model:string,
    image:string,
    specifications:Array<specificationsType>
}
export type specificationsType={
    frame:string,
    brakes:string,
    fork:string,
    wheelDiameter:number
}
let initialState:initialStateType={
    bike:bikes
}
type changeBikesFilterACType={
    type:"CHANGE_BIKES_FILTER_TYPE"
    FilterType:string
}
type returnAllBikesFilterACType={
    type:"RETURN_ALL_BIKES_FILTER_TYPE"
    FilterType:string
}

type ActionsType=changeBikesFilterACType|returnAllBikesFilterACType


export const bikesPageReducer=(state:initialStateType=initialState, action:ActionsType):initialStateType=>{
        switch (action.type){
            case "CHANGE_BIKES_FILTER_TYPE":
                return action.FilterType ==="all"?  {...state,bike:bikes} : {...state,bike:bikes.map((el:bikeType)=>el.type===action.FilterType? el: {}as bikeType)}


            case "RETURN_ALL_BIKES_FILTER_TYPE":
                return {...state}

            default:
                return state
        }
}

export const changeBikesFilterTypeAC=(FilterType:string)=>{
    return{
        type:CHANGE_BIKES_FILTER_TYPE, FilterType:FilterType
    }as const
}
export const returnAllBikesFilterTypeAC=(FilterType:string)=>{
    return{
        type:RETURN_ALL_BIKES_FILTER_TYPE, FilterType:FilterType
    }as const
}

