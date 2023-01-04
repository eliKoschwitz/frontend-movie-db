import {Movie} from "./HomePage";
import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function FavoritMovieCards () {
    const [movieList, setMovieList] = useState<Movie[]>([]);

    useEffect( () => {
        (async () => {
            const response = await axios.get("/api/movies");
            setMovieList(response.data);
        })();
    }, []);

    console.log(movieList);
    return(
        <div>
            {movieList.filter(favMovie => favMovie.favorit === true).map(favMovie => <MovieCard key={favMovie.id} movieCard = {favMovie}/> )}
        </div>
    )

}

export default FavoritMovieCards