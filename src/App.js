import React, { Component } from 'react';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import Chat from './Chat';
import Result from './Result';
import Modify from './Modify';


import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // Change the first page to display here.
    this.state = {
      page: 'Chat'
    };
  }
  updatePage(page) {
    this.setState({
      page: page
    })
  }
  displayMain() {
    switch (this.state.page) {
      case 'Chat' :
        return (<Chat callBackFunc={(page) => {this.updatePage(page)}}/>);
      case 'Result' :
        return (<Result callBackFunc={(page) => {this.updatePage(page)}}/>);
      case 'Modify' :
        return (<Modify callBackFunc={(page) => {this.updatePage(page)}}/>);
      default:
        return (<Chat callBackFunc={(page) => {this.updatePage(page)}}/>);
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {this.displayMain()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
