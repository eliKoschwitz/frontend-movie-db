import React, {useState} from 'react';
import {Movie} from "./HomePage";
import "./moviecard.css";
import axios from "axios";

function MovieCard(props:{movieCard : Movie}) {

    const [movieList, setMovieList] = useState<Movie[]>([]);

    const deleteById = () => {
        (async () => {
            const response = await axios.delete("/api/movies/"+props.movieCard.id);
            setMovieList(response.data);
            window.location.reload();
        })();
    }

    let initialMovieToSendInPut = {
        id: "",
        name: "",
        url: "",
        publicationDate: "",
        favorit: false
    }

    const setFavoritById = () => {
        initialMovieToSendInPut = props.movieCard;
        initialMovieToSendInPut.favorit = !initialMovieToSendInPut.favorit;
        (async () => {
            const response = await axios.put("/api/movies/"+props.movieCard.id, initialMovieToSendInPut);
            const updateList = movieList.map(movie => movie.id === response.data.id ? response.data : movie);
            console.log(updateList)
            setMovieList(updateList);
            window.location.reload();
        })();
    }
    //<Link to={"/detailedCard/"+props.movieCard.id}></Link>

    return (
        <div className="movieCard">
            <div className="linkOverlay">
                <a href={"/detailedCard/"+props.movieCard.id} className="logo" >Your logo name</a>
            </div>
            <div className="buttons">
                <button className="button" onClick={setFavoritById}>Fav</button>
                <button className="button" onClick={deleteById}>Delete</button>
            </div>
            <div className="imageFrame">

                <img className="image" src= {props.movieCard.url} />
            </div>
            <div className="titleAndPub">
                {props.movieCard.name}
                <p className="pubDate">
                    {"("+props.movieCard.publicationDate+")"}
                </p>
            </div>
        </div>
    );
}

export default MovieCard;