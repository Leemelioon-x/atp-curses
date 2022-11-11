import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import FilterBar from "./components/filterBar/FilterBar";
import {BikesContainer} from "./components/bikes/BilkesContainer";
import {SearchBarContainer} from "./components/searchBar/SearchBarContainer";
import {SortingPanelContainer} from "./components/sortingPanel/SortingPanelContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="Bikes_Content">
                <FilterBar/>
                <div className={"Bikes_Content_container"}>
                    <div className={"Bikes_search"}>
                    <SearchBarContainer/>
                    <SortingPanelContainer/>
                    </div>
                    <BikesContainer/>
                </div>
            </div>
        </div>
    );
}

export default App;
