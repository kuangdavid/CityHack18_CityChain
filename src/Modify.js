import React, { Component } from 'react';
import AppBar from '../node_modules/material-ui/AppBar';

import './App.css';

class Modify extends Component {
  constructor(props) {
    super(props);
  }
  displayTitle(isWarning) {
  	if (isWarning) {
  		return (
  			<AppBar
	          title="Warning Some parameters are not possible. Please adjust setting."
	          iconElementLeft={
	          	<i class="material-icons" style={{fontSize: 45}}>error</i>
	          }
	          iconElementRight={<div/>}
	          style={{backgroundColor: '#d50000'}}
	        />
  		);
  	} else {
	  	return (
	  		<AppBar
	          title="Warning Some parameters are not possible. Please adjust setting."
	          iconElementLeft={
	          	<i class="material-icons" style={{fontSize: 45}}>error</i>
	          }
	          iconElementRight={<div/>}
	          style={{backgroundColor: '#d50000'}}
	        />
	  	);
  	}
  }
  render() {
    return (
      <div>
      	{this.displayTitle(true)}
      </div>
    );
  }
}

export default Modify;
