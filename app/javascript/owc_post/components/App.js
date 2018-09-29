import React from "react";
import Review from './Review';
import { video, post } from '../constants/initialState'
import { connect } from 'react-redux';
import { changeTime } from '../actions/timestamp'
// import { Player } from 'video-react';
import VideoPlayer from './VideoPlayer'

const App = (props) => (
  <div className='row'>
    <div className='col-xl-6 pr-3 sticky-top'>
      <div className='mb-2 sticky-top'>
        <VideoPlayer post={post.id} source={video} timestamp={props.timestamp} />
        {/* <Player src={video} /> */}
      </div>
      <button onClick={(e) => { props.dispatch(changeTime(15)) }}>=15</button>
      <button onClick={(e) => { props.dispatch(changeTime(30)) }}>=30</button>
      <button onClick={(e) => { props.dispatch(changeTime(45)) }}>=45</button>
    </div>
    <div className='col-xl-6'>
      {
        props.reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    timestamp: state.timestampReducer,
    reviews: state.reviewsReducer
  }
};

export default connect(mapStateToProps)(App);
