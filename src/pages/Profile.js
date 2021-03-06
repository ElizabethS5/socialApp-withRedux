import React from "react";
import Menu from "../components/menu/Menu";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
      </div>
    );
  }
}

export default Profile;
