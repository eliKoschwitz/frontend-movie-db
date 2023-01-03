import React from 'react';
import {Movie} from "./HomePage";
import "./moviecard.css";
import {Link} from "react-router-dom";

function MovieCard(props:{movieCard : Movie, deleteById:Function, setFavoritById:Function}) {
    const deleteByIdButton = () => props.deleteById(props.movieCard.id);

    const setFavoritById = () => props.setFavoritById(props.movieCard.id);

    return (
        <div className="movieCard">
            <button className="deleteButton" onClick={deleteByIdButton}>Delete</button>
            <button onClick={setFavoritById}>Fav</button>
            <Link to={"/detailedCard/"+props.movieCard.id}> details </Link>
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
