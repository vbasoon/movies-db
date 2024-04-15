import { ActionWithPayload } from './../../redux/utils';
import { createReducer } from '../../redux/utils';
import { Reducer, Action } from "redux";
import { AppThunk } from '../store';
import { client } from '../../api/tmdb';

export interface Movie {
  id: number,
  title: string,
  popularity: number,
  overview: string,
  image?: string,
}

interface MovieState {
  top: Movie[],
  loading: boolean, //1
}

const initialState: MovieState = {
  top: [],
  loading: false,
}

const moviesLoading = () => ({ // 1.Action creator & Action
  type: "movies/loading",
})

const moviesLoaded = (movies: Movie[]) => ({ // 1.Action creator & Action
  type: "movies/loaded",
  payload: movies
})

export function fetchMovies (): AppThunk<Promise<void>> {
  return async (dispatch, getState) => {
    dispatch(moviesLoading())
      const config = await client.getConfiguration()
      const imageUrl = config.images.base_url;
      const results = await client.getPlayNow();

      const mappedResults: Movie[] = results.map((m)=> ({
        id: m.id,
        title: m.title,
        overview: m.overview,
        popularity: m.popularity,
        image: m.backdrop_path ? `${imageUrl}w780${m.backdrop_path}` : undefined,
      }));

      dispatch(moviesLoaded(mappedResults)); // dispatch loaded
  };
}

const moviesReducer = createReducer<MovieState>(
  initialState,
  {
    "movies/loaded": (state, action: ActionWithPayload<Movie[]>) => {
      return {
        ...state, // потрібно розширити поточний стан, для currentState робимо за допомогою spred оператора
        top: action.payload, // властивість top, яка відповідає за список фільмів, додати action payload
        loading: false
      }
    },
    "movies/loading": (state, action) => {
      return {
        ...state,
        loading: true,
      }
    }
  }
)


export default moviesReducer