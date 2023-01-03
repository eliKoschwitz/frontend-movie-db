import {Movie} from "./HomePage";
import {useEffect, useState} from "react";
import axios from "axios";
import FavoritMovieCard from "./FavoritMovieCard";

function FavoritMovieCards () {
    const [movieList, setMovieList] = useState<Movie[]>([]);

    useEffect( () => {
        (async () => {
            const response = await axios.get("/api/movies");
            setMovieList(response.data);
        })();
    }, []); //Ohne [] wäre es sofort....

    console.log(movieList);
    return(
        <div>
            {movieList.filter(favMovie => favMovie.favorit === true).map(favMovies => <FavoritMovieCard favMovie={favMovies} />)}
        </div>
    )

}

export default FavoritMovieCards