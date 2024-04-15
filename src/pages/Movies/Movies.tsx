import { Movie, moviesLoaded } from "../../store/reducers/movies";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import MovieCard from "./MovieCard";
import styles from "./Movies.module.scss"
import { useEffect } from "react";
import { client } from "../../api/tmdb"

import './Movies.css'

interface MoviesProps {
  movies: Movie[]
}

function Movies({movies}: MoviesProps) {

  const dispatch  = useDispatch();
  useEffect(() => {
    async function loadData() {
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

      dispatch(moviesLoaded(mappedResults));
    }

    loadData();
  }, [dispatch]);
  
  return (
    <section className="Movies">
      <div className={styles.list}>
        {movies.map((m)=>(
          <MovieCard
              key = {m.id}
              id={m.id} 
              title={m.title} 
              overview={m.overview} 
              popularity={m.popularity}
              image={m.image}
          />
        ))}
      </div>
    </section>
  )
}

const mapStateToProps = ( state: RootState) => ({
  movies: state.movies.top
})

const connector = connect(mapStateToProps);
export default connector(Movies);