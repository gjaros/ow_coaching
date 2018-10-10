import React from "react";
import Review from './Review';
import { changeTime } from '../actions/timestamp';
import VideoPlayer from './VideoPlayer';

// export default (props) => (
//   <div className='row'>
//     <div className='col-xl-6 pr-3 sticky-top'>
//       <div className='mb-2 sticky-top'>
//         <VideoPlayer post={post.id} source={video} timestamp={props.timestamp} />
//       </div>
//     </div>
//     <div className='col-xl-6'>
//       {
//         props.reviews.map((review) => (
//           <Review key={review.id} {...review} dispatch={props.dispatch} />
//         ))
//       }
//     </div>
//   </div>
// );

export default ({ id, profile_id, title, coachability, created_at }) => (
  <div id={'post-' + id} className='modal fade' aria-hidden='true' role='dialog' tabIndex='-1'>
    <div className='modal-dialog modal-lg' role='document'>
      <section className='modal-header bg-dark border-dark'>
        <div className='container'>
          <p style={{ fontSize: '12px' }} className='text-primary'>Posted by ... ago</p>
          <div className='d-flex align-items-center'>
            <svg width='32' height='32' viewBox='0 0 42 42' className='donut'>
              <circle className='donut-hole' cx='21' cy='21' r='15.91549430918954' fill='transparent'></circle>
              <circle className='donut-ring' cx='21' cy='21' r='15.91549430918954' fill='transparent' stroke='#00e600' strokeWidth='5'></circle>
              <circle className='donut-segment' cx='21' cy='21' r='15.91549430918954' fill='transparent' stroke='#ff3333' strokeWidth='5' strokeDasharray='50' strokeDashoffset='0'></circle>
              <g className='chart-text'><text className='chart-number' x='50%' y='50%' stroke='white'>50%</text></g>
            </svg>
            <h4 className='modal-title d-inline'>{title}</h4>
          </div>
        </div>
        <button className='close text-warning' datadismiss='modal' type='button'>
          <span>×</span>
        </button>
      </section>
    </div>
  </div>
);
