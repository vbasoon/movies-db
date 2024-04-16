import { Movie, fetchMovies } from "../../store/reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store/store";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { Container } from "@mui/system"
import { Grid, LinearProgress, Typography } from "@mui/material";

interface MoviesProps {
  movies: Movie[],
  loading: boolean,
}

function Movies({movies, loading}: MoviesProps) {

  const dispatch  = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch]);

  return (
    <Container sx={{py: 10}} maxWidth="lg">
      <Typography variant="h4" align="center">Now playing</Typography>
   
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