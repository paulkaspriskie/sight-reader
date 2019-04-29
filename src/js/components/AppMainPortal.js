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
      buttonValue: [],
      totalCount: 0,
      accuracyPercentage: 0,
      feedbackClass: ''
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.getRandLetter = this.getRandLetter.bind(this);
    this.updateHighScore = this.updateHighScore.bind(this);
    this.saveSessionToStorage = this.saveSessionToStorage.bind(this);
  }


  componentDidMount() {
    this.getRandLetter();
  }


  componentDidUpdate() {
    if (this.props.counter === 0) {
      this.updateHighScore();
    }
  }


  componentWillUnmount() {
    this.saveSessionToStorage();
  }


  getRandLetter() {
    var dataArr = Object.values(this.props.data);

    dataArr.map((items, i) => {
      var getRandArr = Math.floor(Math.random() * items.length);
      var letterArr = [];

      items.map((item, i) => letterArr.push(item.id));
      let removeDuplicates = [...new Set(letterArr)];

      this.setState({
        randLetterValue: items[getRandArr].id,
        imageSource: items[getRandArr].src,
        buttonValue: removeDuplicates
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
      this.setState({scoreCounter: this.state.scoreCounter + 1});
      this.setState({feedbackClass: 'valid'});
    } else { this.setState({feedbackClass: 'invalid'}); }

    this.setState({totalCount: this.state.totalCount + 1}, function() {
      var roundPercent = Math.round(this.state.scoreCounter / this.state.totalCount * 100);
      this.setState({accuracyPercentage: roundPercent});
    });
  }


  updateHighScore() {
    if (this.state.scoreCounter > this.props.currentHighScore) {
      this.setState({ highScoreValue: this.state.scoreCounter }, function() {
        alert(`New high score: ${this.state.highScoreValue}!`);
        this.props.onChange(this.state.highScoreValue);
      });
    }
  }


  saveSessionToStorage() {
    var scoreArr = [];

    if (localStorage.getItem('scoreData')) {
      const getScores = new Promise(() => {
        var scores = JSON.parse(localStorage.getItem('scoreData'));
        scores.map((items, i) => scoreArr.push(parseInt(items)));
      });
      
      getScores.then(scoreArr.push(this.state.scoreCounter));
    } else {
      scoreArr.push(this.state.scoreCounter);
    }

    localStorage.setItem('scoreData',JSON.stringify(scoreArr));
  }


  render() {
    return (
      <div className="sight-reader-layout-portal-main">
        <h2>Score: {this.state.scoreCounter}</h2>
        <span className={this.state.feedbackClass}></span>
        <h2>Accuracy: {this.state.accuracyPercentage}%</h2>
        <img src={this.state.imageSource}></img>
        <div>
          {this.state.buttonValue.map((items, i) => {
            return <button onClick={this.onButtonClick} key={i}>{items}</button>
          })}
        </div>
      </div>
    );
  }
}

export default AppMainPortal;
