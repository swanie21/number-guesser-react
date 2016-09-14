const React = require('react');

class UserIntervalRange extends React.Component {
  render() {
    return (
      <section className="UserInterval">
        <input type='number'
          className='userMinRange'
          placeholder='Input Min Range'
          onChange={this.props.saveUserMinRange}
        />
        <input type='number'
          className='userMaxRange'
          placeholder='Input Max Range'
          onChange={this.props.saveUserMaxRange}
        />
        <button className="SubmitUserInterval"
          onClick={this.props.generateRandomNumber}>
          Submit Range
        </button>
      </section>
    );
  }
}

export default UserIntervalRange;
