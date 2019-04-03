import React from 'react';

class NumGenRandom extends React.Component {

  constructor(props) {
    super(props);

    this.state = { numValue: '-' };

    this.numGenerator = this.numGenerator.bind(this);
  }

  numGenerator() {

    var randomNumber = Math.floor(Math.random() * 100) + 1 ;

    this.setState({
      numValue: randomNumber
    })

  }

  render() {
    return (
      <div>
        <h1>{this.state.numValue}</h1>
        <button onClick={this.numGenerator}>Click</button>
      </div>
    );
  }

}

export default NumGenRandom;
