import React from 'react';


class TimerCountDown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      counter: 5,
      buttonActive: true
    };

    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  startTimer() {
    let timer = setInterval(this.countDown, 1000);
    this.setState({
      timer,
      buttonActive: !this.state.buttonActive
    });
  }

  countDown() {

    this.setState({counter: this.state.counter - 1});

    if (this.state.counter <= 0) {
      clearInterval(this.state.timer);
      this.setState({
        counter: 5,
        buttonActive: !this.state.buttonActive
      });
    }

  }

  render() {
    return (
      <div>
        <h1>{ this.state.counter }</h1>
        <button id={this.state.buttonActive ? "" : "isHidden"} onClick={this.startTimer}>Start</button>
      </div>
    );
  }

}

export default TimerCountDown;
