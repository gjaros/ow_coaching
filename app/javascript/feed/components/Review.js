import React from 'react';
import Tip from './Tip';
import { users } from '../constants/seeds';

export default (props) => (
  <div>
    <h4>{ props.title } by: { users[0].name }</h4>
    {
      props.tips.map((tip) => (
        <Tip comment={tip.comment} timestamp={tip.timestamp} />
      ))
    }
  </div>
);
