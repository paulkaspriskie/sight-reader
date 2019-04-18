import React from 'react';

class AppMainPortal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      randLetterValue: '',
      currentLetterValue: '',
      imageSource: '',
      scoreCounter: 0,
      highScoreValue: 0,
      test: []
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
    var dataArr = Object.values(this.props.data);

    dataArr.map((items, i) => {
      var getRandArr = Math.floor(Math.random() * items.length);
      this.setState({
        randLetterValue: items[getRandArr].id,
        imageSource: items[getRandArr].src
      });
    });

    this.setState((prevState, props) => ({
      currentLetterValue: prevState.randLetterValue
    }));

    var arr = [];

    this.props.data.images.map((items, i) => {
      var test = Object.values(items);
      arr.push(items.id)
    });

    let unique = [...new Set(arr)];
    this.setState({test: unique});
  }


  onButtonClick(e) {
    this.getRandLetter();
    var input = e.currentTarget.textContent;

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
        <img src={this.state.imageSource}></img>
        <div>
          {this.state.test.map((items, i) => {
            return <button onClick={this.onButtonClick} key={i}>{items}</button>
          })}
        </div>
      </div>
    );
  }
}

export default AppMainPortal;
