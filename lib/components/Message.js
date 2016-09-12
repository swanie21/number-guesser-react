const React = require('react');

class Message extends React.Component {
  render() {
    return (
      <section className="messageHint">
        <h4>{this.props.messageHint}</h4>
      </section>
    );
  }
}

export default Message;
