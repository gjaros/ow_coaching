import React from 'react';
import Post from './Post';
import Modal from './Modal';
import { connect } from 'react-redux';
import { loadPosts } from '../actions/posts';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios-on-rails';

const node = document.getElementById('owc_feed_payload');
const numberOfPosts = JSON.parse(node.getAttribute('number_of_posts'));

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMoreItems: true,
      page: 0
    };
  }

  componentDidMount() {
    const { dispatch, selectedPost } = this.props
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedPost !== this.props.selectedPost) {
      const { dispatch, selectedPost } = nextProps
      dispatch(fetchReviewsIfNeeded(selectedPost))
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props !== prevProps) {
  //     this.setState({ posts: this.props.posts });
  //   }
  // }

  loadMore = (page) => {
    axios.get('/posts.json', {
      params: { page: page }
    })
    .then((response) => {
      this.props.dispatch(loadPosts(response.data));
      this.setState({
        hasMoreItems: this.props.posts.length < numberOfPosts ? true : false,
        page: this.state.page + 1
      });
    })
  }

  render() {
    const { selectedPost, posts, reviews, isFetching, lastUpdated } = this.props
    let scrollItems = [];

    this.props.posts.map((post) => {
      scrollItems.push(
        <div key={post.id}>
          <Post {...post} dispatch={this.props.dispatch}/>
          <Modal {...post} />
        </div>
      );
    });

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMore}
        hasMore={this.state.hasMoreItems}
        loader={<div key={0} className='bg-dark'>Loading...</div>}>
          { scrollItems }
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedPost, reviewsFromID, posts } = state.postsReducer
  const {
    isFetching,
    lastUpdated,
    items: reviews
  } = reviewsFromID[selectedPost] || {
    isFetching: true,
    items: []
  }

  return {
    posts,
    selectedPost,
    reviews,
    isFetching,
    lastUpdated
  }
};

export default connect(mapStateToProps)(Feed);
