import React from 'react'
import moment from 'moment'
import { getRank } from '../constants/helpers'

export default ({ id, profile_id, title, coachability, created_at, updated_at, poster_profile, number_of_reviews, reviews }) => (
  <div className='card shadow-lg border border-dark'>
    <section className='card-header bg-secondary'>
      <p className='text-white' style={{ fontSize: '12px' }}>Posted by <a href={'profiles/' + id} className='text-primary'>{poster_profile.tag}</a> ({poster_profile.sr}) { moment(created_at).fromNow() }
      </p>
      <button className='btn btn-primary btn-block text-truncate'
        data-target={'#post-' + id}
        data-toggle='modal'
        type='button'
        >
        {title}
      </button>
    </section>

    <section className='card-body bg-dark'>
      <div className='row'>
        <div className='col-12 col-sm-2'>
          <div className='row h-100 d-flex align-items-center'>
            <div className='col-4 col-sm-12 d-flex justify-content-center'>
              <svg width='64' height='64' viewBox='0 0 42 42' className='donut'>
                <circle className='donut-hole' cx='21' cy='21' r='15.91549430918954' fill='transparent'></circle>
                <circle className='donut-ring' cx='21' cy='21' r='15.91549430918954' fill='transparent' stroke='#ff3333' strokeWidth='5'></circle>
                <circle className='donut-segment' cx='21' cy='21' r='15.91549430918954' fill='transparent' stroke='#00e600' strokeWidth='5' strokeDasharray={coachability + ', ' + (100-coachability)} strokeDashoffset='0'></circle>
                <g className='chart-text'>
                  <text className='chart-number' x='50%' y='50%' stroke='white'>{coachability}%</text>
                </g>
              </svg>
            </div>
            <div className='col-4 col-sm-12 d-flex justify-content-center'>
              <img className='card-icon' src={require('../assets/rank-' + getRank(poster_profile.sr) + '.png')}/>
            </div>
            <div className='col-4 col-sm-12 d-flex justify-content-center'>
              <img className='card-icon' src={poster_profile.roles.length > 1 ? require('../assets/' + poster_profile.roles[0] + '.png') : require('../assets/flex.png')}/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='card-footer bg-secondary' style={{ fontSize: '12px' }}>
      { reviews.length > 0 ? number_of_reviews : 'No reviews yet' }
    </section>
  </div>
);
