import React from 'react'
import Post from './Post'
import Modal from './Modal'
import InfiniteScroll from 'react-infinite-scroller'
import RecommendedPosts from './RecommendedPosts'
import { connect } from 'react-redux'
import { loadPosts } from '../actions/feed'
import axios from 'axios-on-rails'
import { Link } from 'react-router-dom'

const Feed = ({ hasMoreItems, page, user, posts, dispatch }) => (
  <div>
    {
      user.isLoggedIn() ?
        <a role='button' href='posts/new' className='btn btn-warning btn-block border-dark mb-2'>Create a Post</a> :
        <p className='bg-dark rounded text-white text-center p-3'>Login or Sign Up to participate.</p>
    }
    <div className='row justify-content-md-center'>
      <div className='col-12 col-md-8'>
        <InfiniteScroll
          pageStart={0}
          loadMore={page => {
            axios.get('/posts.json', {
              params: { page }
            })
            .then((response) => {
              dispatch(loadPosts(response.data))
            })
          }}
          hasMore={hasMoreItems}
          loader={<div key={0} className='bg-dark rounded text-white text-center p-2'>Loading...</div>}
        >
          {
            posts.map(post => (
              <div key={post.id}>
                <Post {...post} dispatch={dispatch} />
                <Modal {...post} />
              </div>
            ))
          }
        </InfiniteScroll>
      </div>
      <div className='col-12 col-md-4 d-none d-md-block'>
        <RecommendedPosts />
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  const { hasMoreItems, page, user, posts } = state.feedReducer
  return { hasMoreItems, page, user, posts }
}

export default connect(mapStateToProps)(Feed)
