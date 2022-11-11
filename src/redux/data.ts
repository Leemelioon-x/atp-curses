import {v1} from "uuid";
import {bikeType, initialStateType} from "./BikesPage-reducer";

export const data:initialStateType = {
    bike:[
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
    ]as Array<bikeType>,
    filterTypeValue:"all",
    filterBrandType:"all",
    filterWheelSize:"all",
    searchValue:"",
    sortedPriceValue:"all",
    priceValue:0

}
