import React from 'react';
import AppMainPortal from './AppMainPortal';


class App extends React.Component {

    constructor(props) {
      super(props);

      var defaultScoreValue = 0;

      if (localStorage.getItem('appData')) {
        defaultScoreValue = parseInt(localStorage.getItem('appData'));
      }

      this.state = {
        timer: null,
        counter: 60,
        buttonActive: true,
        showComponent: false,
        currentHighScore: defaultScoreValue
      };

      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
      this.getChildData = this.getChildData.bind(this);
      this.saveStateToStorage = this.saveStateToStorage.bind(this);
    }


    countDown() {
      this.setState({counter: this.state.counter - 1});

      if (this.state.counter === 0) {
        clearInterval(this.state.timer);
        this.setState({
          counter: 60,
          buttonActive: !this.state.buttonActive,
          showComponent: false
        });
      }
    }


    startTimer() {
      let timer = setInterval(this.countDown, 1000);

      this.setState({
        timer,
        buttonActive: !this.state.buttonActive,
        showComponent: true
      });
    }


    getChildData(data) {
      this.setState({currentHighScore: data}, this.saveStateToStorage);
    }


    saveStateToStorage() {
      localStorage.setItem('appData',JSON.stringify(this.state.currentHighScore));
    }


  render() {
    return (
      <div className="app-wrapper-sight-reader">
        <div>
          <h1>Time: {this.state.counter}</h1>
          <button id={this.state.buttonActive ? "" : "isHidden"} onClick={this.startTimer}>Start</button>
          <p>High Score: {this.state.currentHighScore}</p>
        </div>
        {this.state.showComponent ? <AppMainPortal onChange={this.getChildData} counter={this.state.counter} currentHighScore={this.state.currentHighScore} /> : null}
      </div>
    );
  }

}

export default App;
