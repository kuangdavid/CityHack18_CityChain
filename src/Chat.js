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
        return '1';
      case 2: 
        return '2';
      case 4: 
        return '4';
      case 6: 
        return '6';
      default:
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
        {this.displayBoxes()}
      </div>
    );
  }
}

export default Chat;
