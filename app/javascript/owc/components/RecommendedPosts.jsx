import React from 'react'
import { connect } from 'react-redux'
import { getRank } from '../constants/helpers'

const RecommendedPosts = (props) => (
  <div className='bg-dark shadow-lg border border-dark rounded text-white p-3'>
    <h5 className='text-center'>Recommended Posts</h5>
    <div className='d-flex flex-wrap justify-content-center'>
      {
        props.posts.map(post => (
          <button
            key={post.id}
            className='btn btn-outline-primary btn-sm m-1'
            data-target={'#post-' + post.id}
            data-toggle='modal'
            type='button'>
              <img className='badge-icon' src={require('../assets/rank-' + getRank(post.poster_profile.sr) + '.png')}/>
              <img className='badge-icon' src={post.poster_profile.roles.length > 1 ? require('../assets/' + post.poster_profile.roles[0] + '.png') : require('../assets/flex.png')}/>
              <span className='badge badge-light ml-1'>{post.reviews.length}</span>
          </button>
        ))
      }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    posts: state.feedReducer.posts
  }
}

export default connect(mapStateToProps)(RecommendedPosts)
