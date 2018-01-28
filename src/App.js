import React, { Component } from 'react';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import Chat from './Chat';
import Result from './Result';
import Modify from './Modify';


import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'Modify'
    };
  }

  displayMain() {
    switch (this.state.page) {
      case 'Chat' :
        return (<Chat />);
      case 'Result' :
        return (<Result />);
      case 'Modify' :
        return (<Modify />);
      default:
        return (<Chat />);
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
