import {Movie} from "./HomePage";
import {useEffect, useState} from "react";
import axios from "axios";
import FavoritMovieCard from "./FavoritMovieCard";

function FavoritMovieCards () {
    const [movieList, setMovieList] = useState<Movie[]>([]);

    useEffect( () => {
        (async () => {
            const response = await axios.get("/api/movies");
            console.log("hier in favMovieCards"+response.data)
            setMovieList(response.data)
        })();
    }, []);
    console.log(movieList);
    return(
        <div>
            {movieList.filter(favMovie => favMovie.favorit === true).map(favMovies => <FavoritMovieCard favMovie={favMovies} />)}
        </div>
    )

}

export default FavoritMovieCards