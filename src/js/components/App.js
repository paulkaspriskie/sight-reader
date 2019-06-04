import React from 'react';
import AppHeader from './AppHeader';
import AppMainNav from './AppMainNav';
import AppMainPortal from './AppMainPortal';


class App extends React.Component {

  constructor(props) {
    super(props);

    var defaultScoreValue = 0;
    var defaultAvgScore = 0;
    localStorage.getItem('highScoreValue') ? defaultScoreValue = parseInt(localStorage.getItem('highScoreValue')) : 0;
    localStorage.getItem('avgScore') ? defaultAvgScore = Number(localStorage.getItem('avgScore')) : 0;

    this.state = {
      data: {},
      timer: null,
      counter: 60,
      buttonActive: true,
      showComponent: false,
      currentHighScore: defaultScoreValue,
      currentAvgScore: defaultAvgScore,
      toggle: true
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.getHighScore = this.getHighScore.bind(this);
    this.getAvgScore = this.getAvgScore.bind(this);
    this.saveStateToStorage = this.saveStateToStorage.bind(this);
  }


  componentDidMount() {
    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => this.setState({data}));

    var Data = this.state.data;
    var arr = [];

    Object.keys(Data).forEach(function(key) { arr.push(Data[key]); })
    this.setState({data: arr});
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


  getAvgScore(avg, accuracyAvg) {
    console.log(accuracyAvg);
    this.setState({currentAvgScore: avg}, this.saveStateToStorage);
  }


  getHighScore(data) {
    this.setState({currentHighScore: data}, this.saveStateToStorage);
  }


  saveStateToStorage() {
    localStorage.setItem('avgScore', JSON.stringify(this.state.currentAvgScore));
    localStorage.setItem('highScoreValue', JSON.stringify(this.state.currentHighScore));
  }


  toggleMenu() {
    this.setState((prevState) => ({ toggle: !prevState.toggle }) );
  }


  render() {
    return (
      <div className="sight-reader-layout-wrapper">
        <AppMainNav
          menuStatus={this.state.toggle}
          currentHighScore={this.state.currentHighScore}
          currentAvgScore={this.state.currentAvgScore}/>

        <AppHeader
          toggleMenu={this.toggleMenu}
          menuStatus={this.state.toggle}
          counter={this.state.counter}
          currentHighScore={this.state.currentHighScore} />

        {this.state.showComponent ?
          <AppMainPortal
            menuStatus={this.state.toggle}
            data={this.state.data}
            getHighScore={this.getHighScore}
            getAvgScore={this.getAvgScore}
            counter={this.state.counter}
            currentHighScore={this.state.currentHighScore} /> : null}

        <button
          className={this.state.toggle ? "" : "isOpen"}
          id={this.state.buttonActive ? "" : "isHidden"}
          onClick={this.startTimer}>Start</button>
      </div>
    );
  }

}

export default App;
