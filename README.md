### Redux Thunk Practice

### Install
```sh
yarn add react-redux redux redux-thunk
yarn add --dev @types/react-redux @types/redux @types/redux-thunk
```

### Action Creator
- return a `function`, will be called by the **middleware** `automatically`, then passed into `reducers`.
- return an `object`, will be passed into `reducers`
```javascript
export const fetchPosts = () => async (dispatch, getState) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
	dispatch({ type: 'FETCH_POSTS', payload: data });
};
```


