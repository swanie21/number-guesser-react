const React = require('react');
const ReactDOM = require('react-dom');
// import RandomNumber from './RandomNumber';
import UserGuess from './UserGuess';

class Application extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Number Guesser React</h1>
        <UserGuess />
        {/* <RandomNumber /> */}
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
