import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert, hideAlert } from "../redux/action";
import Alert from "./Alert";

class FormPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) return this.props.showAlert("Поле не може бути пустим");
    this.props.hideAlert();
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);

    this.setState({ title: "" });
  };

  changeInputValue = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <div className="mb-3">
          {this.props.alert && <Alert text={this.props.alert} />}
          <label htmlFor="tital" className="form-labele">
            Назва поста
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputValue}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Створити
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  createPost,
  showAlert,
  hideAlert,
};
const mapStateToProps = (state) => {
  return {
    alert: state.app.alert,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPost);
