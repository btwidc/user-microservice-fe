import { combineReducers } from 'redux';

import { departmentReducer } from './departmentReducer';

export const rootReducer = combineReducers({
  department: departmentReducer,
});
