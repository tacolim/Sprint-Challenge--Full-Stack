import { GET_ACCOUNT } from '../actions';

export default (movie = null, action) => {
    switch (action.type) {
        case GET_ACCOUNT:
          return action.payload.data;
        default:
          return movie;
    }
}