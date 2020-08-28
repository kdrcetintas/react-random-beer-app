import { FETCH_NEW_BEER_START, FETCH_NEW_BEER_ERROR, FETCH_NEW_BEER_SUCCESS, ADD_LOADED_BREWERY_DETAIL } from "../actions";
import { ApplicationState } from '../types/ApplicationState';

const INITIAL_STATE: ApplicationState = {
  currentBeer: {
    error: false,
    loading: false,
    data: null
  },
  loadedBreweries: []
};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FETCH_NEW_BEER_START: {
      return {
        ...state, currentBeer: {
          error: false,
          loading: true,
          data: null
        }
      };
    }
    case FETCH_NEW_BEER_SUCCESS:
      return { ...state, currentBeer: action.payload };
    case FETCH_NEW_BEER_ERROR:
      return {
        ...state, currentBeer: {
          error: true,
          loading: false,
          data: null
        }
      };
    case ADD_LOADED_BREWERY_DETAIL:
      return {
        ...state,
        loadedBreweries: [...state.loadedBreweries, action.payload]
      }
    default:
      return state;
  }
};