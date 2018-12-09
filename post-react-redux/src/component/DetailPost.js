import React from "react";

class DetailPost extends React.Component {
  render() {
    return (
      <div>
        {this.props.post.map((item, index) => {
          return (
            <div key={index} className="post">
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.category}</p>
              <p>{item.details}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DetailPost;
