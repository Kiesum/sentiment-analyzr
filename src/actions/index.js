import axios from 'axios';
import { GET_JOURNALS } from './types';

export function getJournals() {
  return function(dispatch) {
    axios.get('/journals')
    .then(response => {
      dispatch({
        type: GET_JOURNALS,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}