import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { toggleHidden } from '../actions/postActions';

const Feed = (props) => (
  props.posts.map((post, index) => (
    <div key={index}>
      <button
        className='post-button'
        onClick={() => { props.dispatch(toggleHidden(post.id)) }}
      >
        {post.title}
      </button>
      <div hidden={props.posts[index].hidden}>
        <Post {...props.post} />
      </div>
    </div>
  ))
);

const mapStateToProps = (state) => {
  return { posts: state }
};

export default connect(mapStateToProps)(Feed);