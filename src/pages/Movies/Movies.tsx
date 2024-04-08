import { Movie } from "../../store/reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store/store";
import MovieCard from "./MovieCard";

import './Movies.css'

interface MoviesProps {
  movies: Movie[]
}

function Movies({movies}: MoviesProps) {
  return (
    <section className="Movies">
      <div className="movies__list">
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