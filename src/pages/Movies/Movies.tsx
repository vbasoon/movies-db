import { Movie, moviesLoaded, moviesLoading } from "../../store/reducers/movies";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import MovieCard from "./MovieCard";
import styles from "./Movies.module.scss"
import { useEffect } from "react";
import { client } from "../../api/tmdb"

import './Movies.css'

interface MoviesProps {
  movies: Movie[],
  loading: boolean,
}

function Movies({movies, loading}: MoviesProps) {

  const dispatch  = useDispatch();
  useEffect(() => {
    async function loadData() { // Load data
      dispatch(moviesLoading())
      const config = await client.getConfiguration()
      const imageUrl = config.images.base_url;
      const results = await client.getPlayNow();

      const mappedResults: Movie[] = results.map((m)=> ({
        id: m.id,
        title: m.title,
        overview: m.overview,
        popularity: m.popularity,
        image: m.backdrop_path 
          ? `${imageUrl}w780${m.backdrop_path}` 
          : undefined,
      }));

      dispatch(moviesLoaded(mappedResults)); // dispatch loaded
    }

    loadData();
  }, [dispatch]);

  return (
    <section className="Movies">
      <div className={styles.list}>
        {loading ? (
          <h3>Loading...</h3>
          ) : (
            movies.map((m)=>(
              <MovieCard
                  id={m.id} 
                  title={m.title} 
                  overview={m.overview} 
                  popularity={m.popularity}
                  image={m.image}
              />
        ))
        )}
      </div>
    </section>
  )
}

const mapStateToProps = ( state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
})

const connector = connect(mapStateToProps);
export default connector(Movies);