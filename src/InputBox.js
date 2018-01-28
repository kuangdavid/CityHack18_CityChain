import React, { Component } from 'react';
import './App.css';

import ListItem from '../node_modules/material-ui/List/ListItem';
import TextField from '../node_modules/material-ui/TextField';
import FlatButton from '../node_modules/material-ui/FlatButton';
import {Card, CardActions} from '../node_modules/material-ui/Card';

const defaultColor = '#f1c40f';
const OnFocusColor = '#2ecc71';

class InputBox extends Component {
  switchColor(color) {
    return color === defaultColor ? OnFocusColor : defaultColor;
  }
  constructor(props) {
    super(props);
    this.state = {
      cameraColor: defaultColor,
      micColor: defaultColor,
    };
  }
  render() {
    return (
      <ListItem
        disabled={true}
      >
        <Card>
          <CardActions>
            <TextField
              hintText=""
              floatingLabelText="Type your answer"
              style={{width: '75%', fontFamily: "Slabo 27px"}}
              value={this.props.value}
              onKeyPress={e => {
                  if (e.key === 'Enter') {
                    this.props.callBackFunc(e.target.value);
                    e.target.value = '';
                  }
                  this.setState({
                    micColor: defaultColor,
                    cameraColor: defaultColor,
                  });
              }}
            />
            <FlatButton
              backgroundColor={this.state.micColor}
              icon={<i className="material-icons">mic</i>}
              style={{width: '10%'}}
              onClick={() => {
                this.setState({
                  micColor: this.switchColor(this.state.micColor),
                  cameraColor: defaultColor,
                });
              }}
            />
            <FlatButton
              backgroundColor={this.state.cameraColor}
              icon={<i className="material-icons">camera_enhance</i>}
              style={{width: '10%'}}
              onClick={() => {
                this.setState({
                  micColor: defaultColor,
                  cameraColor: this.switchColor(this.state.cameraColor),
                });
              }}
            />
          </CardActions>
        </Card>
      </ListItem>
    );
  }
}

export default InputBox;
