import React from 'react';


class AppMainNav extends React.Component {

  render() {
    return (
      <div className={`sight-reader-layout-nav ${this.props.menuStatus ? '' : 'isOpen'}`}>
        <ul>
          <li>Statistics</li>
          <li>High Score: {this.props.currentHighScore}</li>
          <li>Average Score: {this.props.currentAvgScore}</li>
          <li>Accuracy: {this.props.currentAvgAccuracy}%</li>
        </ul>
      </div>
    );
  }
}

export default AppMainNav;
