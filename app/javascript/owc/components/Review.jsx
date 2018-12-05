import React from 'react'
import Tip from './Tip'
import moment from 'moment'
import axios from 'axios-on-rails'
import { destroyReview } from '../actions/feed'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Review = ({ id, post_id, rating, title, summary, created_at, reviewer_profile, tips, dispatch, user }) => (
  <div className='card bg-dark mb-2'>
    <div className='card-header'>
      <p>Reviewed by <a href={'profiles/' + reviewer_profile.id }>{ reviewer_profile.tag }</a> ({reviewer_profile.sr}) { moment(created_at).fromNow() }</p>
      <h6 className='d-inline mr-1'>{ rating }</h6>
      <h5 className='d-inline mr-1'>{ title }</h5>
      {
        (user.isLoggedIn() && reviewer_profile.id === user.profile.id) &&
        <span className='btn-group mx-auto' role='group'>
          <Link
            className='btn btn-warning btn-sm'
            role='button'
            to={{
              pathname: 'editReview',
              state: {
                id,
                post_id,
                profile_id: user.profile.id,
                title,
                summary,
                tips
              }
            }}
            >
            Edit
          </Link>
          <a
            className='btn btn-danger btn-sm'
            role='button'
            onClick={e => {
              axios.delete('/reviews/' + id)
              .then(response => {
                dispatch(destroyReview({ id, post_id }))
              })
              .catch(error => console.log(error))
              }}
            >
            Delete
          </a>
        </span>
      }
    </div>
    <div className='card-body'>
      <p>{ summary }</p>
      {
        tips &&
        tips.map((tip) => (
          <Tip key={tip.id} {...tip} />
        ))
      }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    user: state.feedReducer.user
  }
}

export default connect(mapStateToProps)(Review)
