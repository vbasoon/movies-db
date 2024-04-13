import { Movie } from "../../store/reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store/store";
import MovieCard from "./MovieCard";
import styles from "./Movies.module.scss"
import { useEffect, useState } from "react";
import { client } from "../../api/tmdb" 

import './Movies.css'

async function getPlayNow()  {
  const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzE0Y2U3ZWExYTRhNzA1OTJkMTQyMGUwZmY0MTc4NCIsInN1YiI6IjY2MTc3MjU5OTBiODdlMDE2MzNkNGE4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q8rAoV3PUO8xOWaxlwOt5UL5-pLW14pItJSUVy35rqw'
        }
  };

  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)

  const json = response.json()

  return json;
    
}

// to UP

export function MoviesFetch() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function loadData() {
      const response = await getPlayNow();
      setMovies(response.results)
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