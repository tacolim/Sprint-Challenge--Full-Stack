import { combineReducers } from 'redux';
import accounts from './accountsReducer';
import accountDetail from './accountDetailReducer';

const rootReducer = combineReducers({
    accounts,
    accountDetail
});

export default rootReducer;