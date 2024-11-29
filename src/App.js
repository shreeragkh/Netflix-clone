import React from "react"
import './App.css';
import Navbar from "./components/NavBar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  console.log(process.env.REACT_APP_hey)
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title='Trending'/>
      <RowPost title='Actions' genreId={28} small/>
      <RowPost title='Romance' genreId={10749} small/>
    </div>
  );
}

export default App;
