import React from 'react'
import Tip from './Tip'
import moment from 'moment'
import axios from 'axios-on-rails'
import { changeReview, deleteReview } from '../actions/feed'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Review = ({ id, post_id, rating, title, summary, created_at, reviewer_profile, tips, dispatch, user }) => (
  <div className='card bg-dark mb-2'>
    <div className='card-header'>
      <p>Reviewed by <a href={'profiles/' + reviewer_profile.id }>{ reviewer_profile.tag }</a> ({reviewer_profile.sr}) { moment(created_at).fromNow() }</p>
      {
        user.isLoggedIn() && (
          reviewer_profile.id === user.profile.id &&
          <div>
            <Link
              role='button'
              to='editReview'
              onClick={(e) => dispatch(changeReview({ id, title, summary, tips }))}
              >
              Edit
            </Link>
            <a onClick={e => {
              axios.delete('/reviews/' + id)
              .then(response => {
                console.log(response)
                dispatch(deleteReview({ id, post_id }))
              })
              .catch(error => console.log(error))
              }}>
              Delete
            </a>
          </div>
        )
      }
      <h6 className='d-inline mr-1'>{ rating }</h6>
      <h5 className='d-inline mr-1'>{ title }</h5>
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