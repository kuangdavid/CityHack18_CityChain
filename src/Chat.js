import React, { Component } from 'react';
import List from '../node_modules/material-ui/List/List';
import MessageBox from './MessageBox';
import InputBox from './InputBox';


import './App.css';
import "./css/bootstrap.min.css";
import "./css/AdminLTE.min.css";

class Chat extends Component {
  getTime() {
    const d = new Date();
    return String(d.getHours() + ':' + d.getMinutes());
  }
  getQuestions(i) {
    switch (i) {
      case 1:
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed feugiat mauris. Ut nibh magna, dictum consequat aliquet ut, rhoncus et tellus. Aliquam id commodo tortor, vitae pretium leo.';
      case 2:
        return 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet turpis rhoncus, auctor est vitae, consequat urna.';
      case 4:
        return 'Maecenas pretium augue a justo auctor semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos';
      case 6:
        return '6';
      default:
        this.props.callBackFunc('Modify');
        return 'default' + String(i);
    }
  }
  constructor(props) {
    super(props);
    const question = this.getQuestions(1);
    this.state = {
      messages: [[true, question, this.getTime()]]
    };
  }
  handleMessage(text) {
    let newMessages = this.state.messages.push([false, text, this.getTime()]);
    newMessages = this.state.messages.push([true, this.getQuestions(this.state.messages.length), this.getTime()]);
    this.setState = {
      messages: newMessages,
    };
    this.forceUpdate();
  }

  displayBoxes() {
    const historyMessage = this.state.messages.map((i) => {
        return (
          <MessageBox
            key={i[1]}
            isQuestion={i[0]}
            text={i[1]}
            time={i[2]}
          />);
      }
    );
    return (
      <List>
        {historyMessage}
        <InputBox callBackFunc={(text) => {this.handleMessage(text)}} value={undefined}/>
      </List>
    );
  }
  render() {
    return (
      <div>
        <h1> How may I help you?</h1>
        {this.displayBoxes()}
      </div>
    );
  }
}

export default Chat;
