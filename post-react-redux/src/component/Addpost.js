import React from "react";
import "./addpost.css";

class Addpost extends React.Component {
  state = [
    {
      id: "",
      title: "",
      category: "",
      details: ""
    }
  ];

  handleInput = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    const id = Date.now();
    this.setState({ [name]: value, id: id });
  };

  saveInput = e => {
    e.preventDefault();
    this.props.saveInput(this.state);
  };

  render() {
    return (
      <div className="body">
        <form onSubmit={this.saveInput}>
          <label>Title : </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <br />
          <label>Category : </label>
          <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleInput}
          />
          <br />
          <label>Write New Post : </label>
          <br />
          <textarea
            cols="100"
            rows="15"
            name="details"
            value={this.state.details}
            onChange={this.handleInput}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Addpost;
