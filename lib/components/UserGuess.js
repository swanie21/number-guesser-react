const React = require('react');

class UserGuess extends React.Component {
  constructor() {
    super();
    this.state = {
      guess: ''
    };
    this.handleGuess = this.handleGuess.bind(this);
  }

  handleGuess(e) {
    const guess = e.target.value;
    this.setState({guess:guess});
  }

  clearInput() {
    this.setState({guess: ''});
  }

  render() {
    return (
      <div className='displayLastGuess'>
        <article className='showGuess'>{this.state.guess}</article>
        <input type='number'
          className='guessInput'
          name='guess'
          value={this.state.guess}
          placeholder='Enter your best guess'
          onChange={this.handleGuess}
         />
        <button className='submitGuess'
          onClick={this.clearInput}>
          Submit guess
        </button>
      </div>
    );
  }
}

export default UserGuess;
