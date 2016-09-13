const React = require('react');

class UserGuess extends React.Component {
  render() {
    return (
      <section>
        <h3>Your last guess: </h3>
        <article className='DisplayGuess'>
          <h2>{this.props.displayGuess}</h2>
        </article>
      </section>
    );
  }
}

export default UserGuess;
