import { ActionWithPayload } from './../../redux/utils';
import { createReducer } from '../../redux/utils';
import { Reducer, Action } from "redux";

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

export const moviesLoading = () => ({ // 1.Action creator & Action
  type: "movies/loading",
})

export const moviesLoaded = (movies: Movie[]) => ({ // 1.Action creator & Action
  type: "movies/loaded",
  payload: movies
})

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