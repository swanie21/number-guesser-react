import React from 'react';

class GuessInput extends React.Component {
  render() {
    return (
      <section className='GuessInputField'>
          <input type='number'
               className='GuessInput'
               placeholder='Enter your best guess'
               value={this.props.userGuess}
               onChange={this.props.getUserGuess}
          />
         <button className='SubmitGuess'
               onClick={this.props.handleDisplayGuess}>
               Submit guess
         </button>
         <button className='ClearButton'
                onClick={this.props.clearInput}>
                Clear
         </button>
         <button className="ResetButton"
                onClick={this.props.resetGame}>
                Reset
         </button>
      </section>
    );
  }
}

export default GuessInput;
