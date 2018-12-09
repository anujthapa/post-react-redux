import React from "react";
import "./navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>Add Post</li>
          <li>Index</li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
