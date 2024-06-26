import { Movie, fetchMovies } from "../../store/reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store/store";
import MovieCard from "./MovieCard";
import { useContext, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { Container } from "@mui/system"
import { Grid, LinearProgress, Typography } from "@mui/material";
import { AuthContext, Guest } from "../../components/AuthContext";

interface MoviesProps {
  movies: Movie[],
  loading: boolean,
}

function Movies({movies, loading}: MoviesProps) {

  // const loggedIn = true;
  
  const dispatch  = useAppDispatch();

  const { user } = useContext(AuthContext);
  const loggedIn = user !== Guest
  
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch]);

  return (
    <Container sx={{py: 10}} maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>Now playing</Typography>
   
        {loading ? (
          <LinearProgress color="secondary"/>
          ) : (
            <Grid container spacing={4}>
            {movies.map((m)=>(
              <Grid item key={m.id} xs={12} sm={6} md={4}>
                <MovieCard
                    id={m.id} 
                    title={m.title} 
                    overview={m.overview} 
                    popularity={m.popularity}
                    image={m.image}
                    enableUserActions={loggedIn}
                />
              </Grid>
        ))}
        </Grid>
        )}
      
    </Container>
  )
}

const mapStateToProps = ( state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
})

const connector = connect(mapStateToProps);
export default connector(Movies);