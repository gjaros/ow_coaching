import React from 'react';
import axios from 'axios-on-rails';
import { getReviews } from '../actions/posts'
import store from '../constants/store';

export default ({ id, profile_id, title, coachability, created_at, dispatch }) => (
  <div className='card shadow-lg border border-dark'>
    <section className='card-header bg-secondary'>
      <p style={{ fontSize: '12px' }}>Posted by ... at {created_at}</p>
      <button className='btn btn-primary btn-block text-truncate'
        data-target={'#post-' + id}
        data-toggle='modal'
        type='button'
        onClick={(e) => {
          dispatch(getReviews(id))
        }}>
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
                <circle className='donut-ring' cx='21' cy='21' r='15.91549430918954' fill='transparent' stroke='#00e600' strokeWidth='5'></circle>
                <circle className='donut-segment' cx='21' cy='21' r='15.91549430918954' fill='transparent' stroke='#ff3333' strokeWidth='5' strokeDasharray='50' strokeDashoffset='0'></circle>
                <g className='chart-text'><text className='chart-number' x='50%' y='50%' stroke='white'>50%</text></g>
              </svg>
            </div>
            <div className='col-4 col-sm-12 d-flex justify-content-center'>
              roles
            </div>
            <div className='col-4 col-sm-12 d-flex justify-content-center'>
              rank
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='card-footer bg-secondary'>
      #reviews
    </section>
  </div>
);
