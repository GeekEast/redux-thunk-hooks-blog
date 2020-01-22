import axios from 'axios';
import { FETCH_POSTS as FETCH } from './types'
import _ from 'lodash';

const _fetchPosts = _.memoize(async (dispatch) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch({ type: FETCH, payload: data });
})
// READ
export const fetchPosts = () => async (dispatch: any) => {
  _fetchPosts(dispatch);
};

// CRUD reducer
export const reducer = (posts = [], action: any) => {
  switch (action.type) {
    case FETCH: return action.payload;
    default: return posts;
  }
};