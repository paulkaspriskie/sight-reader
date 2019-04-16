import React from 'react';

class AppMainPortal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      randLetterValue: '',
      currentLetterValue: '',
      scoreCounter: 0,
      highScoreValue: 0,
      test: {}
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.getRandLetter = this.getRandLetter.bind(this);
    this.updateHighScore = this.updateHighScore.bind(this);
  }


  componentDidMount() {
    var Data = this.props.data;
    var arr = [];

    Object.keys(Data).forEach(function(key) { arr.push(Data[key]); })

    arr.map((items, i) => {
      var randArr = Math.floor(Math.random() * items.length);
      this.setState({ test: items[randArr] });
    });

    this.getRandLetter();
  }


  componentDidUpdate() {
    if (this.props.counter === 0) {
      this.updateHighScore();
    }
  }


  getRandLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g"];
    var letter = letters[Math.floor(Math.random() * letters.length)];

    this.setState({ randLetterValue: letter });

    this.setState((prevState, props) => ({
      currentLetterValue: prevState.randLetterValue
    }));

    return letter
  }


  onButtonClick(e) {
    var letter = this.getRandLetter();
    var input = e.currentTarget.textContent;

    this.setState({ randLetterValue: letter });

    if (this.state.currentLetterValue === input) {
      this.setState({ scoreCounter: this.state.scoreCounter + 1});
    }
  }


  updateHighScore() {
    if (this.state.scoreCounter > this.props.currentHighScore) {
      this.setState({ highScoreValue: this.state.scoreCounter }, function() {
        alert(`New high score: ${this.state.highScoreValue}!`);
        this.props.onChange(this.state.highScoreValue);
      });
    }
  }


  render() {

    var Data = this.props.data;
    var arr = [];

    Object.keys(Data).forEach(function(key) {
      arr.push(Data[key]);
    })

    return (
      <div className="sight-reader-layout-portal-main">
        <h2>Score: {this.state.scoreCounter}</h2>
        <span>{this.state.randLetterValue}</span>
        <div>
          {arr.map((items, i) => {
            return items.map((item, i) => {
              return <button onClick={this.onButtonClick} key={i}>{item.id}</button>
            })
          })}
        </div>
      </div>
    );
  }

}

export default AppMainPortal;
