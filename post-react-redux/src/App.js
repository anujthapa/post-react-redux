import React, { Component } from "react";
import Home from "./component/Home";
import Navigation from "./component/Navigation";
import Addpost from "./component/Addpost";
import "./App.css";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "work",
        category: "integrify",
        details: "work at integrify"
      },
      {
        id: 2,
        title: "assignment",
        category: "integrify",
        details: "assignment of integrify"
      },
      {
        id: 3,
        title: "assignment",
        category: "integrify",
        details: "assignment of integrify"
      }
    ],
    showDetails: false
  };

  handleData = obj => {
    const posts = this.state.posts.slice();
    posts.push(obj);
    this.setState({
      posts
    });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Home posts={this.state} />
        <Addpost saveInput={this.handleData} posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
