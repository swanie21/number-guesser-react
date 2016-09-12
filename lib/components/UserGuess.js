const React = require('react');

class UserGuess extends React.Component {
  render() {
    return (
      <section>
        <h3>You guessed: </h3>
        <article className='displayGuess'>
          <h2>{this.props.displayGuess}</h2>
        </article>
      </section>
    );
  }
}

export default UserGuess;
