import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <section className="post card" key={post.id}>
            <div className="card-content">
              <img src="https://github.com/iamshaunjp/react-redux-complete-playlist/blob/lesson-33/poketimes/src/pokeball.png?raw=true" alt="A pokeball"/>
              <Link to={'/' + post.id} >
                <span className="card-title red-text">{post.title}</span>
              </Link>
                <p>{post.body}</p>
            </div>
          </section>
        )
      })
    ) : (
      <div className="center">No Posts Yet</div>
    )
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
         {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps)(Home);