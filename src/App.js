import React, { Component } from 'react';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import AppBar from '../node_modules/material-ui/AppBar';
import Avatar from '../node_modules/material-ui/Avatar';
import FontIcon from '../node_modules/material-ui/FontIcon';
import List from '../node_modules/material-ui/List/List';
import ListItem from '../node_modules/material-ui/List/ListItem';
import TextField from '../node_modules/material-ui/TextField';
import FlatButton from '../node_modules/material-ui/FlatButton';
import MessageBox from './MessageBox';

import {Card, CardText, CardActions} from '../node_modules/material-ui/Card';

import './App.css';
import "./css/bootstrap.min.css";
import "./css/AdminLTE.min.css";

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from '../node_modules/material-ui/styles/colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  displayBoxes() {
    return (
      <List>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              icon={
                <i className="material-icons orange600">face</i>
              }
              color="#FFF9C4"
              backgroundColor="#2E7D32"
              size={30}
              style={{margin: 5}}
            />
          }
        >
          <Card>
            <CardText style={{textAlign:'right'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions style={{textAlign:'right'}}>
              <h5><i className="material-icons" style={{ fontSize: '10px' }}>schedule</i>10:10</h5>
            </CardActions>
          </Card>
        </ListItem>
        <ListItem
          disabled={true}
          rightAvatar={
            <Avatar
              icon={
                <img src="dist/img/user2-160x160.jpg" />
              }
              color="#E0E0E0"
              backgroundColor="#E64A19"
              size={30}
              style={{margin: 5}}
            />
          }
        >
          <Card>
            <CardText style={{textAlign:'left'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions style={{textAlign:'right'}}>
              <h5><i className="material-icons" style={{ fontSize: '10px' }}>schedule</i>10:10</h5>
            </CardActions>
          </Card>
        </ListItem>
        <ListItem
          disabled={true}
        >
          <Card>
            <CardActions>
              <TextField
                hintText="Hint Text"
                floatingLabelText="Floating Label Text"
                style={{width: '75%'}}
              />
              <FlatButton
                backgroundColor={pink400}
                icon={<i className="material-icons">mic</i>}
                style={{width: '10%'}}
              />
              <FlatButton
                backgroundColor={pink400}
                icon={<i className="material-icons">camera_enhance</i>}
                style={{width: '10%'}}
              />
            </CardActions>
          </Card>
        </ListItem>
      </List>
    );
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {this.displayBoxes()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
