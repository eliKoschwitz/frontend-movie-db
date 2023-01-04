import React from 'react';
import {Movie} from "./HomePage";
import MovieCard from "./MovieCard";
import "./movieCardList.css"

function MovieCardList(props:{movieCardList : Movie[], inputForFilter : string}) {
    let movieCardListFilter: Movie[];

    if(props.inputForFilter !== ""){
        const query = props.inputForFilter;
        const re = RegExp(`.*${query.toLowerCase().split("").join(".*")}.*`);
        movieCardListFilter = props.movieCardList.filter(movie => movie.name.toLowerCase().match(re));
    } else {
        movieCardListFilter = props.movieCardList.map(movie => movie);
    }

    return (
        <div className="movieCardList">
            {movieCardListFilter.map(movieCard => <MovieCard key={movieCard.id} movieCard = {movieCard}/> )}
        </div>
    );
}

export default MovieCardList;