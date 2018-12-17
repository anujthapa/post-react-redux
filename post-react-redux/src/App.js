import React, { Component } from "react";
import Home from "./component/Home";
import Navigation from "./component/Navigation";
import Addpost from "./component/Addpost";
import Post from "./component/Post";
import Detailpost from "./component/DetailPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    selectedPostId: null
  };

  handleData = obj => {
    const posts = this.state.posts.slice();
    posts.push(obj);
    this.setState({
      posts
    });
  };

  showPost = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route
                exact
                path="/"
                component={props => (
                  <Home
                    {...props}
                    posts={this.state}
                    showPost={this.showPost}
                  />
                )}
              />
              <Route
                exact
                path="/addpost"
                component={props => (
                  <Addpost
                    {...props}
                    saveInput={this.handleData}
                    posts={this.state.posts}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
