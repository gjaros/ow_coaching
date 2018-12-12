import React from 'react'
import { connect } from 'react-redux'
import { changeTime } from '../actions/player'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: props.source,
      seekTo: props.seekTo
    }
    this.videoRef = React.createRef()
  }

  componentDidMount() {
    this.videoRef.current.ontimeupdate = () => { this.onCurrentTimeChange() }
  }

  //This can't work long-term
  componentDidUpdate(prevProps) {
    if (this.props.seekTo !== prevProps.seekTo) {
      this.setState(
        { seekTo: this.props.seekTo },
        () => this.seek()
      )
    }
  }

  onCurrentTimeChange = () => {
    this.props.dispatch(changeTime(this.videoRef.current.currentTime))
  }

  seek = () => {
    this.videoRef.current.currentTime = this.state.seekTo
    this.setState({ seekTo: 0 })
  }

  render() {
    return (
      <div>
        <div className='embed-responsive embed-responsive-16by9'>
          <video
            className='embed-responsive'
            ref={this.videoRef}
            id='video-player'
            height='200px'
            type='video/mp4'
            controls>
            <source src={this.state.source} type='video/mp4' />
          </video>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { currentTime, seekTo } = state.playerReducer
  return { currentTime, seekTo }
}

export default connect(mapStateToProps)(VideoPlayer)
