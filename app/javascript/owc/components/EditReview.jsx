import React from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'
import axios from 'axios-on-rails'
import { connect } from 'react-redux'
import moment from 'moment'
import { updateReview } from '../actions/feed'
import { seekToTimestamp } from '../actions/player'
import { byTimestamp } from '../constants/helpers'

class EditReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...props.location.state}
  }

  handleTitleOnChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSummaryOnChange = (e) => {
    this.setState({
      summary: e.target.value
    })
  }

  addTip = (timestamp) => {
    // checks to see if a tip already exists with the passed timestamp.
    !this.state.tips.map(tip => tip.timestamp).includes(timestamp) && (
      // concats new tip to tips array.
      this.setState((prevState) => ({
        tips: prevState.tips.concat({
          timestamp,
          comment: '',
          tags: []
        })
      }))
    )
  }

  deleteTip = (timestamp) => {
    this.setState((prevState) => ({
      tips: prevState.tips.filter(tip => tip.timestamp !== timestamp)
    }))
  }

  render() {
    const { currentTime, seekTo, video_url } = this.props
    return (
      <div className='bg-dark rounded p-3'>
        <div className='row'>
          <div className='col-xl-6'>
            <VideoPlayer source={video_url} seekTo={seekTo} />
            <button className='btn btn-warning' onClick={(e) => this.addTip(currentTime)}>
              Add Tip @{ moment().startOf('day').seconds(currentTime).format('mm:ss') }
            </button>
            <Link
              role='button'
              to='/'
              className='btn btn-outline-warning btn-block'
              onClick={(e) => {
                axios.patch('/reviews', {
                  id: this.state.id,
                  post_id: this.state.post_id,
                  profile_id: this.state.profile_id,
                  summary: this.state.summary,
                  title: this.state.title
                })
                .then(reviewResponse => {
                  this.props.dispatch(updateReview({...reviewResponse.data, reviewer_profile: user.profile}))
                  console.log(reviewResponse.data)
                  // tips.forEach(tip => {
                  //   axios.post('/tips', {
                  //     review_id: reviewResponse.data.id,
                  //     timestamp: tip.timestamp,
                  //     comment: tip.comment,
                  //     tags: []
                  //   })
                  // })
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
              onChange={this.handleTitleOnChange}
              placeholder='title'
              value={this.state.title}
            />
            <textarea
              id='summary'
              className='form-control my-2'
              type='text'
              onChange={this.handleSummaryOnChange}
              rows='5'
              placeholder='your thoughts...'
              value={this.state.summary}
            />
            <p className='text-white text-center'>Add a tip by clicking the add timestamp button!</p>
            {
              this.state.tips &&
              this.state.tips.sort((a, b) => byTimestamp(a, b)).map((tip, index) => (
                <div key={index}>
                  <a
                    className='text-warning'
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => { this.props.dispatch(seekToTimestamp(tip.timestamp)) }}
                  >
                    { moment().startOf('day').seconds(tip.timestamp).format('mm:ss') }
                  </a>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={(e) => this.deleteTip(tip.timestamp)}
                    >
                    <span>×</span>
                  </button>
                  <textarea
                    id={'comment-' + index}
                    className='form-control my-2'
                    type='text'
                    onChange={(e) => {}}
                    rows='3'
                    placeholder='a brief tip...'
                    value={tip.comment}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { currentTime, seekTo } = state.playerReducer

  return {
    video_url: state.feedReducer.selectedPost.video_url,
    currentTime,
    seekTo
  }
}

export default connect(mapStateToProps)(EditReview)
