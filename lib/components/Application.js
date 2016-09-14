const React = require('react');
const ReactDOM = require('react-dom');
import UserGuess from './UserGuess';
import GuessInput from './GuessInput';
import Message from './Message';
import UserIntervalRange from './UserIntervalRange';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      userGuess: '',
      inputValue: '',
      randomNumber: '',
      displayGuess: '',
      messageHint: '',
      min: 1,
      max: 100
    };
    this.getUserGuess = this.getUserGuess.bind(this);
    this.handleDisplayGuess = this.handleDisplayGuess.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.saveUserMinRange = this.saveUserMinRange.bind(this);
    this.saveUserMaxRange = this.saveUserMaxRange.bind(this);
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
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
    this.setState({ userGuess: guess, inputValue: guess });
  }

  handleDisplayGuess() {
    const { userGuess } = this.state;
    this.setState({ displayGuess: userGuess });
    this.checkGuess();
    this.clearInput();
  }

  saveUserMinRange(e) {
    const userMinInput = e.target.value;
    this.setState({ min: parseInt(userMinInput)});
  }

  saveUserMaxRange(e) {
    const userMaxInput = e.target.value;
    this.setState({ max: parseInt(userMaxInput) });
  }

  clearInput() {
    this.setState({ inputValue: '' });
  }

  resetGame() {
    this.generateRandomNumber();
    this.clearInput();
  }

  checkGuess() {
    const{ userGuess, randomNumber } = this.state;
    if(parseInt(userGuess) === randomNumber) {
      this.setState({ messageHint: 'You are brilliant!' });
      this.resetGame();
    }
    if(parseInt(userGuess) > randomNumber) {
      this.setState({ messageHint: 'Try again, your guess is too high.' });
    }
    if(parseInt(userGuess) < randomNumber) {
      this.setState({ messageHint: 'Try again, your guess is too low.' });
    }
    if(parseInt(userGuess) < 1 || userGuess > 100 || isNaN(userGuess) || userGuess === '') {
      this.setState({ messageHint: 'Please guess a valid number!' });
    }
  }

  render() {
    return (
      <div className = "Application">
        <h1>React Number Guesser</h1>
        <UserGuess
          displayGuess = {this.state.displayGuess}
        />
        <Message
          messageHint = {this.state.messageHint}
        />
        <GuessInput
          getUserGuess = {this.getUserGuess}
          handleDisplayGuess = {this.handleDisplayGuess}
          inputValue = {this.state.inputValue}
        />
        <UserIntervalRange
          generateRandomNumber = {this.generateRandomNumber}
          saveUserMinRange = {this.saveUserMinRange}
          saveUserMaxRange = {this.saveUserMaxRange}
        />

        <p>Random number: {this.state.randomNumber}</p>
        <p>min: {this.state.min}</p>
        <p>max: {this.state.max}</p>

      </div>
    );
  }
}

module.exports = Application;
