import { Movie } from "../../store/reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store/store";


interface MoviesProps {
  movies: Movie[]
}

function Movies({movies}: MoviesProps) {
  return (
    <div>
      <ul>
        {movies.map((m)=>(
          <li key={m.id}>
            <div>{m.title}</div>
            <div>{m.overview}</div>
            <div>{m.popularity}</div>
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