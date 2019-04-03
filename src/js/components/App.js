import React from 'react';
import TimerCountDown from './TimerCountDown';
import NumGenRandom from './NumGenRandom';


class App extends React.Component {

  render() {
    return (
      <div className="app-wrapper-sight-reader">
        <TimerCountDown />
        <NumGenRandom />
      </div>
    );
  }

}

export default App;
