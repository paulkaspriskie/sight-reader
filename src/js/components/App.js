import React from 'react';
import NumGenRandom from './NumGenRandom';


class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        timer: null,
        counter: 60,
        buttonActive: true,
        showComponent: false,
        childData: 0
      };

      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
      this.getChildData = this.getChildData.bind(this);
    }


    startTimer() {
      let timer = setInterval(this.countDown, 1000);
      this.setState({
        timer,
        buttonActive: !this.state.buttonActive,
        showComponent: true
      });
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

    getChildData(data) {
      this.setState({childData: data})
    }

  render() {
    return (
      <div className="app-wrapper-sight-reader">
        <div>
          <h1>{this.state.counter}</h1>
          <button id={this.state.buttonActive ? "" : "isHidden"} onClick={this.startTimer}>Start</button>
          <p>{this.state.childData}</p>
        </div>
        { this.state.showComponent ? <NumGenRandom onChange={this.getChildData} counter={this.state.counter} /> : null }
      </div>
    );
  }

}

export default App;
