import React from 'react';

const convertTimestamp = (timestamp) => {
  switch(timestamp) {
    case timestamp < 60:
      return 'under 60';
      break;
    default:
      return 'default';
  }
};

export default (props) => (
  <div>
    <p>@{convertTimestamp(props.timestamp)}: {props.comment}</p>
  </div>
);
