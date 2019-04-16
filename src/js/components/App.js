import React from 'react';
import AppHeader from './AppHeader';
import AppMainPortal from './AppMainPortal';


class App extends React.Component {

    constructor(props) {
      super(props);

      var defaultScoreValue = 0;
      localStorage.getItem('appData') ? defaultScoreValue = parseInt(localStorage.getItem('appData')) : 0;

      this.state = {
        data: 0,
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

    componentDidMount() {
      fetch('./data/data.json')
        .then(response => response.json())
        .then(data => this.setState({data}));
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
      <div className="sight-reader-layout-wrapper">
        <AppHeader counter={this.state.counter} currentHighScore={this.state.currentHighScore} />
        {this.state.showComponent ? <AppMainPortal data={this.state.data} onChange={this.getChildData} counter={this.state.counter} currentHighScore={this.state.currentHighScore} /> : null}
        <button id={this.state.buttonActive ? "" : "isHidden"} onClick={this.startTimer}>Start</button>
      </div>
    );
  }

}

export default App;
