import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.setState({
        posts : res.data.slice(0,9)
      })
    })
  }
  render() {
    const { posts } = this.state;
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

export default Home;