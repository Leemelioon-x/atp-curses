import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import FilterBar from "./components/filterBar/FilterBar";
import {BikesContainer} from "./components/bikes/BilkesContainer";
import {SearchBarContainer} from "./components/searchBar/SearchBarContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="Bikes_Content">
                <FilterBar/>
                <div className={"Bikes_Content_container"}>
                <SearchBarContainer/>
                <BikesContainer/>
                </div>
            </div>
        </div>
    );
}

export default App;
