import { GET_ACCOUNTS, ADD_ACCOUNT } from '../actions';

export default (movies = [], action) => {
    switch (action.type) {
        case GET_ACCOUNTS:
          return action.payload.data;
        case ADD_ACCOUNT:
          return action.payload.data;
        default:
          return movies;
    }
}