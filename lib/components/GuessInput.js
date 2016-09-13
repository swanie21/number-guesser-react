const React = require('react');

class GuessInput extends React.Component {
  render() {
    return (
      <section className='GuessInputField'>
        <input type='number'
          className='guessInput'
          placeholder='Enter your best guess'
          value={this.props.inputValue}
          onChange={this.props.getUserGuess}
         />
        <button className='submitGuess'
          onClick={this.props.handleDisplayGuess}>
          Submit guess
        </button>
      </section>
    );
  }
}

export default GuessInput;
