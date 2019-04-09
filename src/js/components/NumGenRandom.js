import React from 'react';

class NumGenRandom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      randLetterValue: '',
      scoreCounter: 0,
      data:{}
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.getRandLetter = this.getRandLetter.bind(this);
  }


  componentDidMount() {
    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => this.setState({data}));

    this.getRandLetter();
  }


  getRandLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g"];
    var letter = letters[Math.floor(Math.random() * letters.length)];

    this.setState({ randLetterValue: letter });
    return letter
  }


  onButtonClick(e) {
    var letter = this.getRandLetter();
    var input = e.currentTarget.textContent;

    this.setState({
      randLetterValue: letter,
      scoreCounter: this.state.scoreCounter + 1
    });
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
        <span>{this.state.randLetterValue}</span>
        <div>
          { arr.map((items, i) => {
            return items.map((item, i) => {
              return <button onClick={this.onButtonClick} key={i}>{item.id}</button>
            })
          })}
        </div>
      </div>
    );
  }

}

export default NumGenRandom;
