import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addpost">Add Post</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
