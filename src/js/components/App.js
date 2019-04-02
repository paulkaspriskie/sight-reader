import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      counter: 5
    };

    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    let timer = setInterval(this.countDown, 1000);
    this.setState({timer});
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  countDown() {
    this.setState({
      counter: this.state.counter - 1
    });

    if (this.state.counter === 0) {
      clearInterval(this.state.timer);
    }

  }

  render() {
    return (
      <div>
        <h1>{ this.state.counter }</h1>
      </div>
    );
  }
}

export default App;
