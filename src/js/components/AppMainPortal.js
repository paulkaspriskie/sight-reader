import React from 'react';

class AppMainPortal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      randLetterValue: '',
      currentLetterValue: '',
      imageSource: '',
      scoreCounter: 0,
      highScoreValue: 0
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
          {this.props.data.images.map((items, i) => {
            return <button onClick={this.onButtonClick} key={i}>{items.id}</button>
          })}
        </div>
      </div>
    );
  }
}

export default AppMainPortal;
