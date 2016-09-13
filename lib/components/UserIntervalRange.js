const React = require('react');

class UserIntervalRange extends React.Component {
  render() {
    return (
      <section className="UserInterval">
        <input type='number'
          className='userMinRange'
          placeholder='Input Min Range'
          value={this.props.userMin}
          onChange={this.props.saveUserMinRange}
        />
        <input type='number'
          className='userMaxRange'
          placeholder='Input Max Range'
          value={this.props.userMax}
          onChange={this.props.saveUserMaxRange}
        />
        <button className="SubmitUserInterval"
          onClick={this.generateRandomNumber}>
          Submit Range
        </button>
      </section>
    );
  }
}

export default UserIntervalRange;
