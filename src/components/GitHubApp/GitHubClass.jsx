import React from "react";
import "../GitHubApp/GitHubApp.css";

class GitHubApp extends React.Component {

  render() {
    return (
      <div className="header">
        {this.props.title}
      </div>
    )
  }
}

export default GitHubApp;