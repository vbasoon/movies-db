import { Movie } from "../../store/reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store/store";
import MovieCard from "./MovieCard";
import styles from "./Movies.module.scss"
import { useEffect, useState } from "react";
import { client } from "../../api/tmdb" 

import './Movies.css'

// to UP

export function MoviesFetch() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function loadData() {
      const results = await client.getPlayNow();
      setMovies(results)
    }

  loadData();
  }, [])
  return <Movies movies={movies} />
}

// To UP

interface MoviesProps {
  movies: Movie[]
}



function Movies({movies}: MoviesProps) {
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