import axios from 'axios';
import { BreweryDetail } from '../types/BreweryDetail';
export const FETCH_NEW_BEER_START = "FETCH_NEW_BEER_START";
export const FETCH_NEW_BEER_SUCCESS = "FETCH_NEW_BEER_SUCCESS";
export const FETCH_NEW_BEER_ERROR = "FETCH_NEW_BEER_ERROR";
export const ADD_LOADED_BREWERY_DETAIL = "ADD_LOADED_BREWERY_DETAIL"; 

export const fetchNewBeer = () => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  dispatch({
    type: FETCH_NEW_BEER_START,
    payload: ''
  })
  axios.get('https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/beer/random/?withBreweries=Y&hasLabels=Y&key=a5c1b917e7ba62dcd79f434ed73bc72d')
    .then(response => {
      dispatch({
        type: FETCH_NEW_BEER_SUCCESS,
        payload: response
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_NEW_BEER_ERROR,
        payload: err
      })
    })
};

export function addLoadedBreweryDetail(detailObj: BreweryDetail) {
  return {
    type: ADD_LOADED_BREWERY_DETAIL,
    payload: detailObj
  }
}