import { Action } from "redux";

export interface ActionWithPayload<T> extends Action {
  payload: T
}

type ActionHandlers<S> = {
  [key: string]: (state: S, action: any) => S
}

export function createReducer<TState>(initialState: TState, handlers: ActionHandlers<TState>) {
  return function (state: TState, action: Action) {
    // state = state ?? initialState;
    state ??= initialState;
    const handler = handlers[action.type];

    return handler?.(state, action) ?? state; // викликається функція тоді коли функція визначена
    

    // if(handler){
    //   return handler(state, action);
    // }

    // return state;
  }
}