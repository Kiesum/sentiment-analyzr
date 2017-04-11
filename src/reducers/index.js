import { combineReducers } from 'redux';
import JournalReducer from './journal';

 const rootReducer = combineReducers({
   journals: JournalReducer,
 });

 export default rootReducer;