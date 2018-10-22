import React from "react";
import Review from './Review';
import moment from 'moment'
import VideoPlayer from './VideoPlayer';

export default ({ id, profile_id, title, coachability, created_at, updated_at, poster_profile, reviews }) => (
  <div id={'post-' + id} className='modal fade' aria-hidden='true' role='dialog' tabIndex='-1'>
    <div className='modal-dialog modal-lg' role='document'>
        <div className='modal-content bg-secondary text-white'>
          <section className='modal-header bg-dark border-dark'>
            <div className='container'>
              <p className='text-white' style={{ fontSize: '12px' }}>Posted by <a href={'profiles/' + id} className='text-primary'>{poster_profile.tag}</a> ({poster_profile.sr}) { moment(created_at).fromNow() }</p>
              <div className='d-flex align-reviews-center'>
                <svg width='32' height='32' viewBox='0 0 42 42' className='donut'>
                  <circle className='donut-hole' cx='21' cy='21' r='15.91549430918954' fill='transparent'></circle>
                  <circle className='donut-ring' cx='21' cy='21' r='15.91549430918954' fill='transparent' stroke='#00e600' strokeWidth='5'></circle>
                  <circle className='donut-segment' cx='21' cy='21' r='15.91549430918954' fill='transparent' stroke='#ff3333' strokeWidth='5' strokeDasharray='50' strokeDashoffset='0'></circle>
                  <g className='chart-text'><text className='chart-number' x='50%' y='50%' stroke='white'>50%</text></g>
                </svg>
                <h4 className='modal-title d-inline'>{title}</h4>
              </div>
            </div>
            <button className='close text-warning' data-dismiss='modal' type='button'>
              <span>×</span>
            </button>
          </section>
          <section className='modal-body border-dark'>
            <div className='row'>
              <div className='col-xl-6 pr-3 sticky-top'>
                <div className='mb-2 sticky-top'>
                  {/* <VideoPlayer source={'https://www.youtube.com/watch?v=zJ4FA5rH2x8&t=435s'} timestamp={timestamp} /> */}
                </div>
              </div>
              <div className='col-xl-6'>
                {
                  reviews.map((review) => (
                    <Review key={review.id} {...review} />
                  ))
                }
              </div>
            </div>
          </section>
          <section className='modal-footer bg-dark border-dark'>
            <button className='btn btn-warning btn-block' data-dismiss='modal' type='button'>Close</button>
          </section>
        </div>
    </div>
  </div>
)
