import { GET_JOURNALS } from '../actions/types';
import { ADD_JOURNAL } from '../actions/types';
import { ADD_JOURNAL_FAILURE } from '../actions/types';
import { ADD_JOURNAL_SERVER_FAILURE } from '../actions/types';

const INTIAL_STATE = { journals: [], errors: '' };

export default function (state = INTIAL_STATE, action) {
  switch(action.type) {
    case GET_JOURNALS:
      return { ...state, journals: action.payload};
    case ADD_JOURNAL:
      return { ...state, journals: state.journals.concat({ 
          text: action.payload.text, 
          happiness_level: action.payload.happiness_level,
          timestamp: 'now'
        }), errors: ''
      };
    case ADD_JOURNAL_FAILURE:
      return { ...state, errors: action.payload}
    case ADD_JOURNAL_SERVER_FAILURE: 
      return { ...state, errors: action.payload }
    default:
      return state;
  }
}
