import React from 'react';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: props.source,
      timestamp: props.timestamp
    };
  }

  componentDidMount() {
    this.setState({ video: document.getElementById('video-player') })
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState(
        { timestamp: this.props.timestamp },
        () => { this.seek() }
      );
    }
  }

  seek = () => {
    console.log('inside seek')
    console.log(this.state.timestamp)
    console.log(this.state.video.currentTime)
    this.state.video.currentTime = this.state.timestamp;
  }

  render() {
    return (
      <div>
        <video
          id='video-player'
          height='200px'
          src={this.state.source}
          type='video/mp4'
          controls>
        </video>
      </div>
    );
  }
}
