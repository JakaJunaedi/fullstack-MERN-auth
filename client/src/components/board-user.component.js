import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      redirect: null,
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );

    const currentUser = AuthService.getCurrentUser();

    if (!currentUser)
    this.setState({ redirect: "/login" });
    
  }

  render() {
    const { content } = this.state; 
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <div className="container">
        <header className="jumbotron">
          {/*<h3>{this.state.content}</h3>*/}
          {content && (
            <p><Link className="btn btn-info" to={"/messenger"}>Chatting</Link></p>
          )}
        </header>
      </div>
    );
  }
}
