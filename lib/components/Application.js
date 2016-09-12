const React = require('react');
const ReactDOM = require('react-dom');
import UserGuess from './UserGuess';
import GuessInput from './GuessInput';
import Message from './Message';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      userGuess: '',
      inputValue: '',
      randomNumber: '',
      displayGuess: '',
      messageHint: '',
    };
    this.getUserGuess = this.getUserGuess.bind(this);
    this.handleDisplayGuess = this.handleDisplayGuess.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  componentWillMount() {
    this.generateRandomNumber();
  }

  generateRandomNumber() {
    this.setState({ randomNumber: Math.floor(Math.random() * (100 - 1)) + 1});
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

  clearInput() {
    this.setState({ inputValue: '' });
  }

  checkGuess() {
    const{ userGuess, randomNumber } = this.state;
    if(parseInt(userGuess) === randomNumber) {
      this.setState({ messageHint: 'You are brilliant!' });
    }
    if(parseInt(userGuess) > randomNumber) {
      this.setState({ messageHint: 'Try again, your guess is too high.' });
    }
    if(parseInt(userGuess) < randomNumber) {
      this.setState({ messageHint: 'Try again, your guess is too low.' });
    }
    if(parseInt(userGuess) < 1 || userGuess > 100 || isNaN(userGuess)) {
      this.setState({ messageHint: 'Please guess a valid number!' });
    }
  }

  render() {
    return (
      <div>
        <h1>React Number Guesser</h1>
        <UserGuess
          displayGuess={this.state.displayGuess}
        />
        <Message
          messageHint={this.state.messageHint}
        />
        <GuessInput
          getUserGuess={this.getUserGuess}
          handleDisplayGuess={this.handleDisplayGuess}
          inputValue={this.state.inputValue}
        />
        <p>{this.state.randomNumber}</p>
      </div>
    );
  }
}

module.exports = Application;
