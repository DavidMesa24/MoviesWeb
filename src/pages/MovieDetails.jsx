import movie from './movie.json'
import {useParams} from "react-router";
import styles from './MovieDetails.module.css'
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Spinner } from '../components/Spinner';
export function MovieDetails()
{
    const {movieId}= useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie]=  useState(null);

    useEffect(() =>
    {
        setIsLoading(true);
        get("/movie/" + movieId).then (data =>
            {
                setIsLoading(false);
                setMovie(data);
            })
    }, [movieId])

    if (isLoading)
    {
        return <Spinner />
    }
    if (!movie)
    {
        return null;
    }
    const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    return <div className = {styles.detailsContainer}>
    <img className = {`${styles.col} ${styles.imageStyle}`} src={imgUrl} alt ={movie.title}/>
    <div className = {`${styles.col} ${styles.textDetails}`}>
        <p className = {styles.firstParr}>
            <strong>Title: </strong>{movie.title}
        </p>
        <p>
            <strong>Date: </strong>{movie.release_date}
        </p>
        <p>
            <strong>Description: </strong>{movie.overview}
        </p>
        <p>
            <strong>Genres: </strong>
            {movie.genres.map(genre => genre.name).join(', ')}
        </p>
    </div>
    </div>;
}