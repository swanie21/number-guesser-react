import React from 'react';

class Message extends React.Component {

  render() {
    return (
      <section className="MessageHint">
        <article className="Message">
          <h4>{this.props.messageHint}</h4>
        </article>
      </section>
    );
  }
}

export default Message;
