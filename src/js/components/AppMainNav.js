import React from 'react';


class AppMainNav extends React.Component {
  render() {
    return (
      <div className="sight-reader-layout-nav" id={this.props.menuStatus ? 'hideMenu' : ''}>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    );
  }
}

export default AppMainNav;
