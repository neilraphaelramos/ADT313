import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [query, setQuery] = useState('');
    const [searchedMovieList, setSearchedMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(undefined);
    const [movie, setMovie] = useState(undefined);
    const [notfound, setnotFound] = useState(false);
    const navigate = useNavigate();
    let { movieId } = useParams();

    const handleSearch = useCallback(() => {
        axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
            headers: {
                Accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTdiNmUyNGJkNWRkNjhiNmE1ZWFjZjgyNWY3NGY5ZCIsIm5iZiI6MTcyOTI5NzI5Ny4wNzMzNTEsInN1YiI6IjY2MzhlZGM0MmZhZjRkMDEzMGM2NzM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZIX4EF2yAKl6NwhcmhZucxSQi1rJDZiGG80tDd6_9XI',
            },
        }).then((response) => {
            if (response.data.results.length === 0) {
                console.log("Not Found");
                setnotFound(true)
            } else {
                setSearchedMovieList(response.data.results);
                console.log("Movies Found");
                console.log(response.data.results);
                setnotFound(false)
            }

        });
    }, [query]);

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
    };

    const handleSave = () => {
        const accessToken = localStorage.getItem('accessToken');
        console.log(accessToken);
        if (selectedMovie === undefined) {
            //add validation
            alert('Please search and select a movie.');
        } else {
            const data = {
                tmdbId: selectedMovie.id,
                title: selectedMovie.title,
                overview: selectedMovie.overview,
                popularity: selectedMovie.popularity,
                releaseDate: selectedMovie.release_date,
                voteAverage: selectedMovie.vote_average,
                backdropPath: `https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`,
                posterPath: `https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`,
                isFeatured: 0,
            };

            const request = axios({
                method: 'post',
                url: '/movies',
                data: data,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then((saveResponse) => {
                    console.log(saveResponse);
                    alert('Save Success');
                    navigate('/main/movies');
                })
                .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        if (movieId) {
            axios.get(`/movies/${movieId}`).then((response) => {
                setMovie(response.data);
                const tempData = {
                    id: response.data.tmdbId,
                    original_title: response.data.title,
                    overview: response.data.overview,
                    popularity: response.data.popularity,
                    poster_path: response.data.posterPath,
                    release_date: response.data.releaseDate,
                    vote_average: response.data.voteAverage,
                };
                setSelectedMovie(tempData);
                console.log(response.data);
            });
        }
    }, [movieId]);

    return (
        <div className="container mt-5 overflow-auto"
            style={{
                maxHeight: '80vh',
                overflowX: 'hidden',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
            }}
        >
            <h1>{movieId !== undefined ? 'Edit ' : 'Create '} Movie</h1>

            {movieId === undefined && (
                <>
                    <div className="search-container">
                        <div className="form-group">
                            <label>Search Movie</label>
                            <div className="d-flex">
                                <input
                                    type="text"
                                    className="form-control me-2"
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Search Results Container with Scroll */}
                        <div
                            className="searched-movie mt-3 overflow-auto"
                            style={{
                                maxHeight: '200px',
                                overflowX: 'hidden',
                                overflowY: 'scroll',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            {notfound === true ? (
                                <p className="text-center text-muted" >Movie not found</p>
                            ) : (
                                searchedMovieList.map((movie) => (
                                    <p
                                        key={movie.id}
                                        className="border p-2"
                                        onClick={() => handleSelectMovie(movie)}
                                    >
                                        {movie.original_title}
                                    </p>
                                ))
                            )}
                        </div>
                    </div>
                    <hr />
                </>
            )}

            <div className="row">
                {/* Column for the image */}
                <div className="col-md-6 border">
                    {selectedMovie && (
                        <img
                            className="img-fluid mb-3"
                            src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
                            alt={selectedMovie.original_title}
                        />
                    )}
                </div>

                {/* Column for the form */}
                <div className="col-md-5">
                    <form>
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={selectedMovie ? selectedMovie.original_title : ''}
                                readOnly
                            />
                        </div>

                        <div className="form-group">
                            <label>Overview</label>
                            <textarea
                                className="form-control"
                                rows={5}
                                value={selectedMovie ? selectedMovie.overview : ''}
                                readOnly
                            />
                        </div>

                        <div className="form-group">
                            <label>Popularity</label>
                            <input
                                type="text"
                                className="form-control"
                                value={selectedMovie ? selectedMovie.popularity : ''}
                                readOnly
                            />
                        </div>

                        <div className="form-group">
                            <label>Release Date</label>
                            <input
                                type="text"
                                className="form-control"
                                value={selectedMovie ? selectedMovie.release_date : ''}
                                readOnly
                            />
                        </div>

                        <div className="form-group">
                            <label>Vote Average</label>
                            <input
                                type="text"
                                className="form-control"
                                value={selectedMovie ? selectedMovie.vote_average : ''}
                                readOnly
                            />
                        </div>

                        <button
                            type="button"
                            className="btn btn-success mt-3"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
