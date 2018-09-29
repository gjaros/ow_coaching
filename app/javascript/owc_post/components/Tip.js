import React from 'react';
import moment from 'moment';

export default ({ timestamp, comment, helpfulness, tags }) => (
  <div className='border border-primary rounded p-2 mb-1'>
    <p>
      <a
        className='text-warning'
        // onClick={(e) => { props.dispatch }}
        >
          { moment().startOf('day').seconds(timestamp).format('H:mm:ss') }
      </a>
    </p>
    <p>{ comment }</p>
    <p>{helpfulness[0]} of {helpfulness[0] + helpfulness[1]} found this helpful.</p>
    {
      tags.map((tag, index) => (
        <a
          key={'tag-' + index}
          href='#'
          className='badge badge-pull badge-light text-dark mr-1 mb-2'
          >
          { tag }
        </a>
      ))
    }
  </div>
);
