import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import FilterBar from "./components/filterBar/FilterBar";
import {BikesContainer} from "./components/bikes/BilkesContainer";

function App() {
  return (
    <div className="App">
    <Header/>
      <div className="Bikes_Content">
    <FilterBar/>
    <BikesContainer/>
      </div>
    </div>
  );
}

export default App;
