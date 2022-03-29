import React, { useState, useEffect } from 'react';
import { get } from '../utils/httpClient';
import {Spinner} from './Spinner'

import { MovieCard } from "./MovieCard";
import stylos from "./MoviesGrid.module.css";
export function MoviesGrid() {

    const [movies, setMovies] = useState([]);  
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        get("/discover/movie").then(data =>
            {
                setLoading(false);
                setMovies(data.results);
            });

    }, []);

    if (isLoading)
    {
        return <Spinner />;
    }
    return <ul className={stylos.moviesGrid}>
        {movies.map((movie) => (<MovieCard key = {movie.id} movie = {movie} />
        ))}
    </ul>
}