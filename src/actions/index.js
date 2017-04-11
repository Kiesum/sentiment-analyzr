import axios from 'axios';
import { GET_JOURNALS } from './types';
import { ADD_JOURNAL } from './types';
import { ADD_JOURNAL_FAILURE } from './types';

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

export function addJournal(text, happiness_level) {
  return function(dispatch) {
    axios.post('/journals', {
      text: text,
      happiness_level: happiness_level
    })
    .then(response => {
      dispatch({
        type: ADD_JOURNAL,
        payload: response.data
      });
    })
    .catch(function (error) {
      dispatch({
        type: ADD_JOURNAL_FAILURE,
        payload: response.data,
      })
    }); 
  }
}
