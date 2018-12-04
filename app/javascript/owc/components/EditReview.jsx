import React from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'
import axios from 'axios-on-rails'
import { connect } from 'react-redux'
import moment from 'moment'
import { addTip, changeTitle, changeSummary, editReview } from '../actions/feed'
import { seekToTimestamp } from '../actions/timestamp'

const EditReview = ({ id, post_id, summary, title, tips, dispatch, timestamp, post, user }) => (

  <div className='bg-dark rounded p-3'>
    <div className='row'>
      <div className='col-xl-6'>
        <VideoPlayer
          source={post.video_url}
          timestamp={timestamp}
          seekTo={seekTo}
          />
        <button className='btn btn-warning' onClick={(e) => { dispatch(addTip(timestamp)) }}>
          Add Tip @{ moment().startOf('day').seconds(timestamp).format('mm:ss') }
        </button>
        <Link
          role='button'
          to='/'
          className='btn btn-outline-warning btn-block'
          onClick={(e) => {
            axios.patch('/reviews/' + id, {
              profile_id: user.profile.id,
              post_id,
              summary,
              title
            })
            .then(response => {
              dispatch(editReview({...response.data, reviewer_profile: user.profile}))
            })
            .catch(error => console.log(error))
        }}>
          Save
        </Link>
      </div>
      <div className='col-xl-6'>
        <input
          id='title'
          className='form-control my-2'
          type='text'
          onChange={(e) => { dispatch(changeTitle(e.target.value)) }}
          placeholder='title'
          value={title}
        />
        <textarea
          id='summary'
          className='form-control my-2'
          type='text'
          onChange={(e) => { dispatch(changeSummary(e.target.value)) }}
          rows='5'
          placeholder='your thoughts...'
          value={summary}
        />
        <p className='text-white text-center'>Add a tip by clicking the add timestamp button!</p>
        {
          tips &&
          tips.map((tip, index) => (
            <div key={index}>
              <a
                className='text-warning'
                style={{ cursor: 'pointer' }}
                onClick={(e) => { dispatch(seekToTimestamp(tip.timestamp)) }}
              >
                { moment().startOf('day').seconds(tip.timestamp).format('mm:ss') }
              </a>
              <textarea
                id={'comment-' + index}
                className='form-control my-2'
                type='text'
                onChange={(e) => {}}
                rows='3'
                placeholder='a brief tip...'
              />
            </div>
          ))
        }
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  const { id, profile_id, post_id, summary, title, tips } = state.feedReducer.review
  return {
    id,
    profile_id,
    post_id,
    summary,
    title,
    tips,
    timestamp: state.timestampReducer.timestamp,
    seekTo: state.timestampReducer.seekTo,
    post: state.feedReducer.selectedPost,
    user: state.feedReducer.user
  }
}

export default connect(mapStateToProps)(EditReview)
