import { GET_ACCOUNT } from '../actions';

export default (account = null, action) => {
  console.log('accountDetailReducer', action);
    switch (action.type) {
        case GET_ACCOUNT:
          return action.payload.data;
        default:
          return account;
    }
}