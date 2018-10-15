import React from 'react';
import Tip from './Tip';
import moment from 'moment';
import axios from 'axios-on-rails';

export default ({ id, rating, title, summary, created_at, profile, tips }) => (
  <div className='card bg-dark mb-2'>
    <div className='card-header'>
      {/* <p>Reviewed by <a href={'profiles/' + profile.id}>{ profile.tag }</a> on { created_at }</p> */}
      <h6 className='d-inline mr-1'>{ rating }</h6>
      <h5 className='d-inline mr-1'>{ title }</h5>
    </div>
    <div className='card-body'>
      <p>{ summary }</p>
      {/* {
        tips.map((tip) => (
          <Tip key={tip.id} {...tip} />
        ))
      } */}
    </div>
  </div>
);
