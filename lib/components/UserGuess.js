const React = require('react');

class UserGuess extends React.Component {
  render() {
    return (
      <section>
        <h3>You guessed: </h3>
        <article className='displayGuess'>
          <h2>{this.props.displayGuess}</h2>
        </article>
        <article>
          <h3>Too high/Too low</h3>
        </article>
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

export default UserGuess;
