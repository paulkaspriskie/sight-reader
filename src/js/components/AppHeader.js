import React from 'react';


class AppHeader extends React.Component {

  render() {
    return (
      <div>
        <h1>Time: {this.props.counter}</h1>
        <p>High Score: {this.props.currentHighScore}</p>
      </div>
    );
  }

}

export default AppHeader;
