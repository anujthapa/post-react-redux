import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <div>
          <p>{this.props.item.id}</p>
        </div>
        <div>
          <p>{this.props.item.title}</p>
        </div>
        <div />
        <p>{this.props.item.category}</p>
        <button onClick={() => this.props.deleteHandaler()}>Delete</button>
      </div>
    );
  }
}
