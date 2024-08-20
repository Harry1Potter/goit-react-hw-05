import { useEffect, useState } from "react";
import { fetchMovieByQuery } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputQuery = form.elements.query.value.trim();

    if (!inputQuery) {
      return;
    }

    setSearchParams({ query: inputQuery });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const getMoviesByQuery = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { results } = await fetchMovieByQuery(searchQuery);
        setMovieList(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMoviesByQuery();
  }, [searchQuery]);

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <h2>Something went wrong ...</h2>}
      {movieList.length > 0 ? (
        <MovieList movies={movieList} />
      ) : (
        !isLoading && searchQuery && <h2>No movies found for "{searchQuery}".</h2>
      )}
    </div>
  );
};

export default MoviesPage;
