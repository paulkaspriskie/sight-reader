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
    this.generateRandNum = this.generateRandNum.bind(this);
  }


  componentDidMount() {
    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => this.setState({data}));

    this.generateRandNum();
  }


  generateRandNum() {
    var letters = ["a", "b", "c", "d", "e", "f", "g"];
    var letter = letters[Math.floor(Math.random() * letters.length)];

    this.setState({ numValue: letter });
  }


  numGenerator(e) {

    var letters = ["a", "b", "c", "d", "e", "f", "g"];
    var letter = letters[Math.floor(Math.random() * letters.length)];

    var input = e.currentTarget.textContent;

    this.setState({ numValue: letter, scoreCounter: this.state.scoreCounter + 1 });

  }


  render() {

    var verticalDimension = Math.floor(this.state.numValue / 2);

    var Data = this.state.data;
    var arr = [];

    Object.keys(Data).forEach(function(key) {
      arr.push(Data[key]);
    })

    return (
      <div>
        <h2>{this.state.scoreCounter}</h2>
        <span>{this.state.numValue}</span>
        <div>
          { arr.map((items, i) => {
            return items.map((item, i) => {
              return <button onClick={this.numGenerator} key={i}>{item.id}</button>
            })
          })}
        </div>
      </div>
    );
  }

}

export default NumGenRandom;
