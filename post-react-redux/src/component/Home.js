import React from "react";
import "./home.css";
import Post from "./Post";

class Home extends React.Component {
  postHandaler = e => {
    let id = e.target.id;
    console.log(id);
  };

  deleteHandaler = id => {
    const post = this.props.posts.posts;
    const posts = post.splice(id, 1);
    this.setState({ posts });
  };

  showPost = id => {
    const item = this.props.posts.posts.filter(item => item.id === id);
    return <p>{item.details}</p>;
  };

  render() {
    return (
      <div className="postOuterBody">
        <div className="PostBody">
          {this.props.posts.posts.map((item, index) => {
            return (
              <div>
                <Post
                  id={item.id}
                  key={index}
                  item={item}
                  deleteHandaler={() => this.deleteHandaler}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
