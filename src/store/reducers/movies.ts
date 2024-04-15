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
  top: Movie[]
}

const initialState: MovieState = {
  top: [
    { id: 1, title: "Inception", popularity: 98, overview: "Dreams..."},
    { id: 2, title: "The GodFather", popularity: 97, overview: "GodFather..."},
    { id: 3, title: "The Dark Knight", popularity: 96.5, overview: "Batman..."},
    { id: 4, title: "The GodFather Part II", popularity: 96, overview: "Part II..."},
  ],
}

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
        top: action.payload // властивість top, яка відповідає за список фільмів, додати action payload
      }
    }
  }
)


export default moviesReducer