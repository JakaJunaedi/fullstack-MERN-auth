import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

import IdleTimer from 'react-idle-timer';
import TimeoutModal from '../TimeoutModal';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },

      showModal: false
    }

    this.idleTimer = null;
    this.logoutTimer = null;
  }

  onIdle = () => {
    this.togglePopup();
    this.logoutTimer = setTimeout(() => {
    this.handleLogout();
    }, 1000 * 5 * 1); // 5 seconds
  }
 
  togglePopup = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  }
 
  handleStayLoggedIn = () => {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
      this.logoutTimer = null;
    }
    this.idleTimer.reset();
    this.togglePopup();
  }

  handleLogout = () => {
    this.props.history.push('/login');
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) 
    this.setState({ redirect: "/login" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    const { showModal } = this.state;

    return (
      <div className="container">

<IdleTimer
        ref={ref => { this.idleTimer = ref }}
        element={document}
        stopOnIdle={true}
        onIdle={this.onIdle}
        timeout={1000 * 10 * 1} // 10 seconds
      />
 
      <TimeoutModal
        showModal={showModal}
        togglePopup={this.togglePopup}
        handleStayLoggedIn={this.handleStayLoggedIn}
      />

        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>: null}
      </div>
    );
  }
}
