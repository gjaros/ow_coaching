import React from 'react'

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: props.source,
      timestamp: props.timestamp
    }
    this.videoRef = React.createRef()
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState(
        { timestamp: this.props.timestamp },
        () => { this.seek() }
      )
    }
  }

  seek = (seekTo = 0) => {
    // console.log('inside seek')
    // console.log(this.state.timestamp)
    // console.log(this.videoRef.current)
    // console.log('before: ' + this.videoRef.current.currentTime)
    this.videoRef.current.currentTime = this.state.timestamp
    // console.log('after: ' + this.videoRef.current.currentTime)
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
