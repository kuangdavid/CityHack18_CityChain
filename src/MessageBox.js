import React, { Component } from 'react';
import './App.css';

import Avatar from '../node_modules/material-ui/Avatar';
import ListItem from '../node_modules/material-ui/List/ListItem';
import {Card, CardText, CardActions} from '../node_modules/material-ui/Card';

const getMessageDetail = ({text, time}) => {
  return (
    <Card>
      <CardText style={{textAlign:'right'}}>
        {text}
      </CardText>
      <CardActions style={{textAlign:'right'}}>
        <h5><i className="material-icons" style={{ fontSize: '10px' }}>schedule</i>{time}</h5>
      </CardActions>
    </Card>
  );
}

const MessageBox = ({isQuestion, text, time}) => {
  if (isQuestion) {
    return (
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
        {getMessageDetail(text, time)}
      </ListItem>
    );
  } else {
    return (
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
        {getMessageDetail(text, time)}
      </ListItem>
    );
  }
}

export default MessageBox;
