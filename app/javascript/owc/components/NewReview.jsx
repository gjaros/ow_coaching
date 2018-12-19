import React from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from './VideoPlayer'
import axios from 'axios-on-rails'
import { connect } from 'react-redux'
import moment from 'moment'
import { newReview, postReview } from '../actions/feed'
import { seekToTimestamp } from '../actions/player'
import { byTimestamp } from '../constants/helpers'

class NewReview extends React.Component {
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

  handleCommentOnChange = (e, timestamp) => {
    e.persist()

    this.setState((prevState) => ({
      tips: prevState.tips.map(tip => tip.timestamp === timestamp ? { ...tip, comment: e.target.value } : { ...tip })
    }))
  }

  addTag = (tagToAdd, timestamp) => {
    this.setState((prevState) => ({
      tips: prevState.tips.map(tip => tip.timestamp === timestamp ? { ...tip, tags: tip.tags.concat(tagToAdd) } : { ...tip })
    }))
  }

  deleteTag = (tagToRemove, timestamp) => {
    this.setState((prevState) => ({
      tips: prevState.tips.map(tip => tip.timestamp === timestamp ? { ...tip, tags: tip.tags.filter(tag => tag !== tagToRemove) } : { ...tip })
    }))
  }

  render() {
    const { user, video_url, currentTime, seekTo } = this.props
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
              onClick={ e => {
                this.props.dispatch(postReview({
                  review: {
                    post_id: this.state.post_id,
                    profile_id: this.state.profile_id,
                    summary: this.state.summary,
                    title: this.state.title
                  },
                  tips: this.state.tips
                }))
                // let recievedReview = {}
                // let recievedTips = []
                // axios.post('/reviews', {
                //   post_id: this.state.post_id,
                //   profile_id: this.state.profile_id,
                //   summary: this.state.summary,
                //   title: this.state.title
                // })
                // .then(reviewResponse => {
                //   console.log(reviewResponse.data)
                //   recievedReview = reviewResponse.data
                //   this.state.tips && (
                //     this.state.tips.forEach(tip => {
                //       axios.post('/tips', {
                //         review_id: reviewResponse.data.id,
                //         timestamp: tip.timestamp,
                //         comment: tip.comment,
                //         tags: tip.tags
                //       })
                //       .then(tipResponse => {
                //         console.log(tipResponse.data)
                //         recievedTips.concat(tipResponse.data)
                //       })
                //       .catch(reviewError => console.log(reviewError))
                //     })
                //   )
                // })
                // .catch(tipError => console.log(tipError))
                //
                // this.props.dispatch(newReview({...recievedReview, tips: recievedTips, reviewer_profile: user.profile}))
              }}>
              Submit
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
                    className='btn btn-danger btn-sm ml-3'
                    onClick={(e) => this.deleteTip(tip.timestamp)}
                    >
                    <span>×</span>
                  </button>
                  <textarea
                    id={'comment-' + index}
                    className='form-control my-2'
                    type='text'
                    onChange={(e) => this.handleCommentOnChange(e, tip.timestamp)}
                    rows='3'
                    placeholder='a brief tip...'
                    value={tip.comment}
                    />
                  <div className='d-flex flex-wrap'>
                    <div className='input-group input-group-sm'>
                      <input
                        id={'tip-' + index}
                        className='form-control'
                        type='text'
                        placeholder='tag'
                        />
                      <div className='input-group-append'>
                        <button
                          className='btn btn-outline-light'
                          onClick={(e) => this.addTag(document.getElementById('tip-' + index).value, tip.timestamp)}
                          >
                          +
                        </button>
                      </div>
                    </div>
                    {
                      tip.tags &&
                      tip.tags.map((tag, index) => (
                        <a
                          key={index}
                          className='badge badge-pill badge-light text-dark mr-1 mt-2'
                          style={{ cursor: 'pointer' }}
                          onClick={(e) => this.deleteTag(tag, tip.timestamp)}
                          >
                          { tag }
                        </a>
                      ))
                    }
                  </div>
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
    user: state.feedReducer.user,
    video_url: state.feedReducer.selectedPost.video_url,
    currentTime,
    seekTo
  }
}

export default connect(mapStateToProps)(NewReview)
