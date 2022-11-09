import React from 'react';
import {Dispatch} from "redux";
import {bikesSearchAC, changeBikesFilterTypeAC} from "../../redux/BikesPage-reducer";
import {storeType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {SearchBar} from "./SearchBar";

type mapStateToPropsType={

}

type mapDispatchToProps={
    searchBikes:(searchValue:string)=>void
}

const mapStateToProps=(state:storeType):mapStateToPropsType=>{
    return{
    }
}

const mapDispatchToProps=(dispatch:Dispatch):mapDispatchToProps=>{
    return {
        searchBikes:(searchValue:string)=>{
            dispatch(bikesSearchAC(searchValue))
        }
    }
}

export const SearchBarContainer = connect(mapStateToProps,mapDispatchToProps)(SearchBar)