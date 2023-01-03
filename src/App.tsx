import React from 'react';
import HomePage from "./component/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailedMovieCard from "./component/DetailedMovieCard";
import FavoritMovieCards from "./component/FavoritMovieCards";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<HomePage/>} />
                <Route path ="/detailedCard/:id" element={<DetailedMovieCard/>} />
                <Route path ="/favoritCards" element={<FavoritMovieCards/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}




export default App;
