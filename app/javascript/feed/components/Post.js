import React from "react";
import Review from './Review';
import { reviews, tips } from '../constants/seeds';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 50,
      reviews
    };
  }
  render() {
    return (
      <div>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/XeFxdkaFzRA?start=" + (this.state.timestamp ? this.state.timestamp : 0)}
          // add timestamp by putting '?start=<seconds>' at end of link
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
        {
          this.state.reviews.map((review) => (
            <Review 
              id={review.id} 
              userID={review.user_id} 
              title={review.title}
              tips={tips.filter((tip) => tip.review_id === review.id)} 
            />
          ))
        }
      </div>
    );
  }
}
