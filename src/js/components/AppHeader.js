import React from 'react';


class AppHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = { toggle: true };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
   this.setState((prevState) => ({ toggle: !prevState.toggle }) );
  }

  render() {
    return (
      <div className="sight-reader-layout-header">
        <button onClick={this.toggleMenu}>menu</button>
        <h1>Time: {this.props.counter}</h1>
        <p className={this.state.toggle ? '' : 'showMenu'}>High Score: {this.props.currentHighScore}</p>
      </div>
    );
  }

}

export default AppHeader;
