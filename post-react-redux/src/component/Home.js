import React from "react";
import "./home.css";
import Post from "./Post";
import DetailPost from "./DetailPost";

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

  render() {
    return (
      <div className="postOuterBody">
        <div className="PostBody">
          {this.props.posts.posts.map((item, index) => {
            return (
              <div>
                <div onClick={() => this.props.showPost(item.id)}>
                  <Post
                    id={item.id}
                    key={index}
                    item={item}
                    deleteHandaler={() => this.deleteHandaler}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <DetailPost
          post={this.props.posts.posts.filter(
            item => item.id === this.props.posts.selectedPostId
          )}
        />
        ;
      </div>
    );
  }
}

export default Home;
