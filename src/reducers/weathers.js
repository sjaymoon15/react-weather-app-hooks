import { FETCH_WEATHERS, FETCH_WEATHERS_ERROR } from '../actions/types';

export const defaultState = {
  city: null,
  list: null,
  error: null,
};

const weathers = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_WEATHERS:
      return {
        ...state,
        city: action.payload.city,
        list: action.payload.list,
        error: null,
      };
    case FETCH_WEATHERS_ERROR:
      return {
        ...state,
        city: null,
        list: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weathers;
