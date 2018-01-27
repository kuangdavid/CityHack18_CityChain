import React from 'react';
import './App.css';

import Avatar from '../node_modules/material-ui/Avatar';
import ListItem from '../node_modules/material-ui/List/ListItem';
import {Card, CardText, CardActions} from '../node_modules/material-ui/Card';

const getMessageDetail = (text, time, style) => {
  return (
    <Card>
      <CardText style={style}>
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
        {getMessageDetail(text, time, {textAlign:'left'})}
      </ListItem>
    );
  } else {
    return (
      <ListItem
        key={text}
        disabled={true}
        rightAvatar={
          <Avatar
            icon={
              <img src="dist/img/user2-160x160.jpg" alt="User"/>
            }
            color="#E0E0E0"
            backgroundColor="#E64A19"
            size={30}
            style={{margin: 5}}
          />
        }
      >
        {getMessageDetail(text, time, {textAlign:'right'})}
      </ListItem>
    );
  }
}

export default MessageBox;
