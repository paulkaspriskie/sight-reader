import React from 'react';

class NumGenRandom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numValue: '',
      scoreCounter: 0,
      data:{}
    };

    this.numGenerator = this.numGenerator.bind(this);
  }

  componentDidMount() {
    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => this.setState({data}));

    this.setState({numValue: 400});
  }

  numGenerator() {

    // var randomNumber = Math.floor(Math.random() * 100) + 1 ;
    var randomNumber = Math.floor(Math.random() * (800 - 200)) + 200;

    this.setState({
      numValue: randomNumber,
      scoreCounter: this.state.scoreCounter + 1
    });

  }

  render() {

    var verticalDimension = Math.floor(this.state.numValue / 2);

    return (
      <div>
        <h1>{this.state.numValue}</h1>
        <p>{this.state.scoreCounter}</p>
        <img src={"https://placekitten.com/" + this.state.numValue + "/" + verticalDimension }></img>
        <button onClick={this.numGenerator}>Click</button>
      </div>
    );
  }

}

export default NumGenRandom;
