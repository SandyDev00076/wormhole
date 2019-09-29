import { combineReducers } from 'redux';
import { ProcessReducer } from './processReducer';

export const reducer = combineReducers({ process: ProcessReducer });