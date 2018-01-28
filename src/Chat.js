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
        return 'Are you a Business or an Individual?';
      case 2:
        return 'Which industry are you in? (Proptery/Finance/Provider)';
      case 4:
        return 'What geographical area are you interested in?';
      case 6:
        return 'Please add details of your request...';
      default:
        this.props.callBackFunc('Modify');
        return 'Thank you';
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
