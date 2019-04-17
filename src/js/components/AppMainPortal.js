import React from 'react';

class AppMainPortal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      randLetterValue: '',
      currentLetterValue: '',
      scoreCounter: 0,
      highScoreValue: 0,
      test: ''
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.getRandLetter = this.getRandLetter.bind(this);
    this.updateHighScore = this.updateHighScore.bind(this);
  }


  componentDidMount() {
    this.getRandLetter();
  }


  componentDidUpdate() {
    if (this.props.counter === 0) {
      this.updateHighScore();
    }
  }


  getRandLetter() {
    var test = Object.values(this.props.data);

    test.map((items, i) => {
      var getRandArr = Math.floor(Math.random() * items.length);
      this.setState({test: items[getRandArr].id});
    });

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

    return (
      <div className="sight-reader-layout-portal-main">
        <h2>Score: {this.state.scoreCounter}</h2>
        <span>{this.state.randLetterValue}</span>
        <div>
          {this.props.data.images.map((items, i) => {
            return <button onClick={this.onButtonClick} key={i}>{items.id}</button>
          })}
        </div>
        <p>{this.state.test}</p>
      </div>
    );
  }

}

export default AppMainPortal;
