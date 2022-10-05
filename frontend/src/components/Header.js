import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/topbar_logo.png";

const LoggedOutView = (props) => {
  if (!props.currentUser) {
    return (
      <div class="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Sign in
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  return null;
};

const LoggedInView = (props) => {
  if (props.currentUser) {
    return (
      <div class="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/editor" className="nav-link">
              <i className="ion-compose"></i>&nbsp;New Item
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </Link>
          </li>

          <li className="nav-item">
            <Link to={`/@${props.currentUser.username}`} className="nav-link">
              <img
                src={props.currentUser.image}
                className="user-pic pr-1"
                alt={props.currentUser.username}
              />
              {props.currentUser.username}
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ padding: "0.5rem 2rem" }}>
        <div className="row">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand col-6 m-auto" >
            <img alt="logo" src={logo} className="w-100" />
          </Link>

        </div>


        <LoggedOutView currentUser={this.props.currentUser} />

        <LoggedInView currentUser={this.props.currentUser} />

      </nav>
    );
  }
}

export default Header;
