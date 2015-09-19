import React, {PropTypes} from 'react';
import MessageList from 'components/MessageList';
import MessageComposer from 'components/MessageComposer';
import './styles.scss';


export default class Messages extends React.Component {
  static propTypes = {
    messages: PropTypes.array,
  }

  render() {
    const {messages} = this.props;
    return (
      <div className='messages'>
        <MessageList messages={messages}/>
        <MessageComposer />
      </div>
    );
  }
}