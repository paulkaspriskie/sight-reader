import React from 'react';
import TimerCountDown from './TimerCountDown';
import NumGenRandom from './NumGenRandom';


class App extends React.Component {

  render() {
    return (
      <div>
        <TimerCountDown />
        <NumGenRandom />
      </div>
    );
  }

}

export default App;
