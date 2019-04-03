import React from 'react';

class NumGenRandom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numValue: '-',
      scoreCounter: 0
    };

    this.numGenerator = this.numGenerator.bind(this);
  }

  numGenerator() {

    var randomNumber = Math.floor(Math.random() * 100) + 1 ;

    this.setState({
      numValue: randomNumber,
      scoreCounter: this.state.scoreCounter + 1
    })

  }

  render() {
    return (
      <div>
        <h1>{this.state.numValue}</h1>
        <p>{this.state.scoreCounter}</p>
        <button onClick={this.numGenerator}>Click</button>
      </div>
    );
  }

}

export default NumGenRandom;
