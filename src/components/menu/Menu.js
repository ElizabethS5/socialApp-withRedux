import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Menu">
        <h1>Kwitter</h1>
        <div id="menu-links">
          <Link to="/messagefeed">Message Feed</Link>
          <Link to="/" onClick={this.handleLogout}>
            Logout
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
