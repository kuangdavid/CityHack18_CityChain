import React from 'react';
import './App.css';

import ListItem from '../node_modules/material-ui/List/ListItem';
import TextField from '../node_modules/material-ui/TextField';
import FlatButton from '../node_modules/material-ui/FlatButton';
import {Card, CardActions} from '../node_modules/material-ui/Card';

import {
  pink400,
} from '../node_modules/material-ui/styles/colors';

const InputBox = ({callBackFunc}) => {
  return (
    <ListItem
      disabled={true}
    >
      <Card>
        <CardActions>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
            style={{width: '75%'}}
            onKeyPress={e => {
                if (e.key === 'Enter') {
                  callBackFunc(e.target.value);
                }
            }}
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
  );
}

export default InputBox;
