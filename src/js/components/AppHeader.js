import React from 'react';


class AppHeader extends React.Component {
  render() {
    return (
      <div className={`sight-reader-layout-header ${this.props.menuStatus ? '' : 'isOpen'}`}>
        <button onClick={this.props.toggleMenu}>menu</button>
        <h1>Time: {this.props.counter}</h1>
        <p>High Score: {this.props.currentHighScore}</p>
      </div>
    );
  }
}

export default AppHeader;
