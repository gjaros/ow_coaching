import React from 'react'
import Post from './Post'
import Modal from './Modal'
import InfiniteScroll from 'react-infinite-scroller'
import { connect } from 'react-redux'
import { loadPosts } from '../actions/posts'
import axios from 'axios-on-rails'

const node = document.getElementById('owc_feed_payload')
const numberOfPosts = JSON.parse(node.getAttribute('number_of_posts'))

class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMoreItems: true,
      page: 0
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
  }

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
    let items = []

    this.props.posts.map(post => {
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
        loader={<div key={0} className='bg-dark'>Loading...</div>}>
          { items }
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer
  }
}

export default connect(mapStateToProps)(Feed)
