import React, { Component } from "react";
import { Link } from 'react-router-dom';


import UserService from "../services/user.service";
import TutorialDataService from "../services/tutorial.service";

export default class BoardModerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  
  componentDidMount() {
    UserService.getModeratorBoard().then(
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
  }

  

    
  render() {
    
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
        
      </div>
    );
  }
}
