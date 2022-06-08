import * as Action from '../actions/ticker-actions';

const initialState = [];

export function tickerReducer(state = initialState, action) {
  switch (action.type) {
    case Action.UPDATE_TICKER: {
      return [...action.data];
    }
    default: {
      return state;
    }
  }
}
