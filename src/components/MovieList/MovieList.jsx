import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // function to call 'SET_DETAIL' saga and load /detail page
    const getDetail = (id) => {
        dispatch({ type: 'SET_DETAIL', payload: id });
        history.push('/details');
    }

    return (
        <main>
            <h1>Movie List</h1>

            <section className='movie-list'>
                {movies.map(movie => {
                    return (
                        <div>
                            <div 
                            className="movies-card" 
                            key={movie.id} 
                            onClick={() => getDetail(movie.id)} >
                            <img
                                        src={movie.poster}
                                        alt={movie.title}
                                        style={{width:100}}
                                        />
                                <div className="container">
                                <h3>{movie.title}</h3>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

        </main>

    );
}

export default MovieList;