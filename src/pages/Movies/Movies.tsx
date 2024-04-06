import { Movie } from "../../store/reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store/store";
import MovieCard from "./MovieCard";


interface MoviesProps {
  movies: Movie[]
}

function Movies({movies}: MoviesProps) {
  return (
    <div>
      <ul>
        {movies.map((m)=>(
          <li key={m.id}>
            <MovieCard title={m.title} overview={m.overview} popularity={m.popularity}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = ( state: RootState) => ({
  movies: state.movies.top
})

const connector = connect(mapStateToProps);
export default connector(Movies);