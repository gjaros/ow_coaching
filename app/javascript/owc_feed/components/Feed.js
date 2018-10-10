import React from 'react';
import Post from './Post';
import Modal from './Modal';
import { connect } from 'react-redux';
import { loadPosts } from '../actions/posts';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios-on-rails';

const node = document.getElementById('owc_feed_payload');
const numberOfPosts = JSON.parse(node.getAttribute('number_of_posts'));
console.log(numberOfPosts)

// http://localhost:3000/posts?page=2

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
      hasMoreItems: true,
      page: 1
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ posts: this.props.posts });
    }
  }

  loadMore = (page) => {
    // axios.get('/posts?page='+page+'.json')
    axios.get('/posts', {
      params: {
        page: page
      }
    })
      .then((response) => {
        console.log(response.data);
        this.props.dispatch(loadPosts(response.data));
        this.setState({ hasMoreItems: this.state.posts.length < numberOfPosts ? true : false, page: this.state.page + 1 });
      })
      .catch(error => console.log(error));
  }

  render() {
    let items = [];

    this.state.posts.map((post, index) => {
      items.push(
        <div key={post.id}>
          <Post {...post} />
          <Modal {...post} />
        </div>
      );
    });

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMore}
        hasMore={this.state.hasMoreItems}
        loader={<p className='bg-dark '>Loading...</p>}>
          { items }
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timestamp: state.timestampReducer,
    posts: state.postsReducer
  }
};

export default connect(mapStateToProps)(Feed);
