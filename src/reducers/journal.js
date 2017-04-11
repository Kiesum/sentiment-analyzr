import { GET_JOURNALS } from '../actions/types';
import { ADD_JOURNAL } from '../actions/types';

const INTIAL_STATE = { journals: []};

export default function (state = INTIAL_STATE, action) {
  switch(action.type) {
    case GET_JOURNALS:
      return { ...state, journals: action.payload};
    case ADD_JOURNAL:
      return { ...state }
    default:
      return state;
  }
}
