import React from 'react';
import ReactDOM from 'react-dom';
import UserGuess from './UserGuess';
import GuessInput from './GuessInput';
import Message from './Message';
import UserIntervalRange from './UserIntervalRange';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      userGuess: '',
      randomNumber: '',
      displayGuess: '',
      messageHint: '',
      min: 1,
      max: 100,
      userMin: '',
      userMax: '',
    };
    this.getUserGuess = this.getUserGuess.bind(this);
    this.handleDisplayGuess = this.handleDisplayGuess.bind(this);
    this.saveUserMinRange = this.saveUserMinRange.bind(this);
    this.saveUserMaxRange = this.saveUserMaxRange.bind(this);
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  componentDidMount() {
    this.generateRandomNumber();
  }

  generateRandomNumber() {
    const { min, max } = this.state;
    this.setState({ randomNumber: Math.floor(Math.random() * (max - min)) + min});
  }

  getUserGuess(e) {
    const guess =  e.target.value;
    this.setState({ userGuess: guess });
  }

  handleDisplayGuess() {
    const { userGuess } = this.state;
    this.setState({ displayGuess: userGuess });
    this.checkGuess();
    this.clearInput();
  }

  saveUserMinRange(e) {
    const userMinInput = e.target.value;
    this.setState({ min: +userMinInput, userMin: +userMinInput });
  }

  saveUserMaxRange(e) {
    const userMaxInput = e.target.value;
    this.setState({ max: +userMaxInput, userMax: +userMaxInput });
  }

  clearInput() {
    this.setState({ userGuess: '' });
  }

  resetGame() {
    this.setState({
      userGuess: '',
      displayGuess: '',
      messageHint: '',
      min: 1,
      max: 100,
      userMin: '',
      userMax: ''
    });
    this.generateRandomNumber();
  }

  checkGuess() {
    const{ userGuess, randomNumber } = this.state;
    if (+userGuess === randomNumber) {
      this.setState({ messageHint: 'YOU ARE BRILLIANT! Press Reset to play again.'});
    }
    if (+userGuess > randomNumber) {
      this.setState({ messageHint: 'Try again, your guess is too high.' });
    }
    if (+userGuess < randomNumber) {
      this.setState({ messageHint: 'Try again, your guess is too low.' });
    }
    if (+userGuess < 1 || +userGuess > 100 || isNaN(userGuess) || +userGuess === '') {
      this.setState({ messageHint: 'Please guess a valid number!' });
    }
  }

  render() {
    return (
      <div className="Application">
        <h1>React Number Guesser</h1>
        <UserGuess
          displayGuess = {this.state.displayGuess}
        />
        <Message
          messageHint = {this.state.messageHint}
        />
        <GuessInput
          userGuess = {this.state.userGuess}
          getUserGuess = {this.getUserGuess}
          handleDisplayGuess = {this.handleDisplayGuess}
          clearInput = {this.clearInput}
          resetGame = {this.resetGame}
        />
        <UserIntervalRange
          generateRandomNumber ={this.generateRandomNumber}
          saveUserMinRange = {this.saveUserMinRange}
          saveUserMaxRange = {this.saveUserMaxRange}
          clearInput = {this.clearInput}
          resetGame = {this.resetGame}
          userMin = {this.state.userMin}
          userMax = {this.state.userMax}
        />
      </div>
    );
  }
}

export default Application;
