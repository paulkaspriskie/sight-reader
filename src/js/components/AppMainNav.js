import React from 'react';


class AppMainNav extends React.Component {

  componentDidMount() {
    console.log(localStorage.getItem('avgScore'));
  }

  render() {
    return (
      <div className={`sight-reader-layout-nav ${this.props.menuStatus ? '' : 'isOpen'}`}>
        <ul>
          <li>Statistics</li>
          <li>High Score: {localStorage.getItem('highScoreValue')}</li>
          <li>Average Score: {localStorage.getItem('avgScore')}</li>
        </ul>
      </div>
    );
  }
}

export default AppMainNav;
