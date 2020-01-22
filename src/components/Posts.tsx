import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { fetchPosts } from '../redux/index'

const Posts = () => {

  const posts = useSelector(state => _.get(state, ['posts']))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  return (
    <div>
      <div>
        <button onClick={() => { dispatch(fetchPosts()) }}>Refresh</button>
      </div>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts;