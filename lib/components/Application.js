const React = require('react');
const ReactDOM = require('react-dom');
import UserGuess from './UserGuess';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      userGuess: '',
      inputValue: '',
      randomNumber: this.generateRandomNumber(),
      displayGuess: '',
      messageHint: '',
    };
    this.getUserGuess = this.getUserGuess.bind(this);
    this.handleDisplayGuess = this.handleDisplayGuess.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  generateRandomNumber() {
    return (Math.floor(Math.random() * (100 - 1)) + 1);
  }

  setRandomNumber() {
    const randomNum = this.generateRandomNumber();
    this.setState({ randomNumber: randomNum });
  }

  getUserGuess(e) {
    const guess =  e.target.value;
    this.setState({ userGuess: guess, inputValue: guess });
  }

  handleDisplayGuess() {
    const { userGuess } = this.state;
    this.setState({ displayGuess: userGuess });
    this.clearInput();
  }

  clearInput() {
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <div>
        <h1>React Number Guesser</h1>
        <UserGuess
          displayGuess={this.state.displayGuess}
          getUserGuess={this.getUserGuess}
          handleDisplayGuess={this.handleDisplayGuess}
          inputValue={this.state.inputValue}
        />
      </div>
    );
  }
}

//   checkGuess() {
//     const{userGuess, randomNumber} = this.state;
//     if(parseInt(userGuess) === randomNumber) {
//       return this.setState({ messageHint: 'You are brilliant!' });
//     }
//     if(parseInt(userGuess) > randomNumber) {
//       return this.setState({ messageHint: 'Try again, your guess is too high.' });
//     }
//     if(parseInt(userGuess) < randomNumber) {
//       return this.setState({ messageHint: 'Try again, your guess is too low.' });
//     }
//     if(parseInt(userGuess) < 1 || parseInt(userGuess) > 100 || isNaN(parseInt(userGuess))) {
//       return this.setState({ messageHint: 'Please guess a valid number!' });
//     }
//   }


module.exports = Application;
