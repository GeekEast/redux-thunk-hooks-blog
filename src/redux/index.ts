import { combineReducers } from 'redux';
import { reducer as posts } from './instances/posts';


// export reducers
export default combineReducers({
  posts
})


// export types
export { FETCH_USER, FETCH_POSTS } from './types'

// export action creators
export { fetchPosts } from './instances/posts'


