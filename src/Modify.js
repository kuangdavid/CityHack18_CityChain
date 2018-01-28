import React, { Component } from 'react';
import AppBar from '../node_modules/material-ui/AppBar';
import Paper from '../node_modules/material-ui/Paper';
import TextField from '../node_modules/material-ui/TextField';
import FlatButton from '../node_modules/material-ui/FlatButton';
import {Card, CardText, CardActions} from '../node_modules/material-ui/Card';

import './App.css';

const successColor = '#5cb85c';
const errorColor = '#d9534f';

class Modify extends Component {
  constructor(props) {
    super(props);
    this.state={
    	isWarning: true,
    	field1Color: errorColor,
    	field2Color: successColor,
    	field3Color: successColor,
    	field4Color: successColor,
    	field5Color: successColor,
    	field6Color: errorColor,
    	field1Text: 'This value is too high.',
    	field2Text: '',
    	field3Text: '',
    	field4Text: '',
    	field5Text: '',
    	field6Text: 'This value is too high.',
    }
  }
  displayTitle() {
  	console.log(this.state.isWarning);
  	if (this.state.isWarning) {
  		return (
  			<AppBar
	          title="Warning Some parameters are not possible. Please adjust setting."
	          iconElementLeft={
	          	<i className="material-icons" style={{fontSize: 45}}>error</i>
	          }
	          iconElementRight={<div/>}
	          style={{backgroundColor: errorColor}}
	        />
  		);
  	} else {
	  	return (
	  		<AppBar
	          title="Please click on Analyse"
	          iconElementLeft={
	          	<i className="material-icons" style={{fontSize: 45}}>done</i>
	          }
	          iconElementRight={<div/>}
	          style={{backgroundColor: successColor}}
	        />
	  	);
  	}
  }
  displayParameters() {
  	return (
	  	<Card>
	  		<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field1Color}}
					errorColor={this.state.field1Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value) < 50) {
							this.setState({
								field1Text: '',
								field1Color: successColor,
							});
							this.updateIsWarning();
						} else {
							this.setState({
								field1Text: 'This value is too high.',
								field1Color: errorColor,
							});
						}
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field2Color}}
					errorColor={this.state.field2Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value) <= 100) {
							this.setState({
								field2Text: '',
								field2Color: successColor,
							});
						} else {
							this.setState({
								field2Text: 'This value is too high.',
								field2Color: errorColor,
							});
						}
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field3Color}}
					errorColor={this.state.field3Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value) <= 100) {
							this.setState({
								field3Text: '',
								field3Color: successColor,
							});
						} else {
							this.setState({
								field3Text: 'This value is too high.',
								field3Color: errorColor,
							});
						}
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field4Color}}
					errorColor={this.state.field4Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value) <= 100) {
							this.setState({
								field4Text: '',
								field4Color: successColor,
							});
						} else {
							this.setState({
								field4Text: 'This value is too high.',
								field4Color: errorColor,
							});
						}
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field5Color}}
					errorColor={this.state.field5Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value) <= 100) {
							this.setState({
								field5Text: '',
								field5Color: successColor,
							});
						} else {
							this.setState({
								field5Text: 'This value is too high.',
								field5Color: errorColor,
							});
						}
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field6Color}}
					errorColor={this.state.field6Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value) < 50) {
							this.setState({
								field6Text: '',
								field6Color: successColor,
							});
							this.updateIsWarning();
						} else {
							this.setState({
								field6Text: 'This value is too high.',
								field6Color: errorColor,
							});
						}
					}}
			    />
			</div>
			<CardActions>
				<FlatButton
	              icon={<i className="material-icons">autorenew</i>}
	              style={{width: '20%'}}
      			  label="Analyse"
      			  backgroundColor={successColor}
	              onClick={() => {
	              }}
	            />
			</CardActions>
	  	</Card>
  	);
  }
  updateIsWarning() {
  	if (this.state.field1Color !== errorColor && 
  		this.state.field6Color !== errorColor &&
  		this.state.isWarning) {
  		console.log('done');
  		this.setState = ({
  			isWarning: false,
  		});
  	}
  }
  render() {
    return (
      <div>
      	{this.displayTitle()}
      	{this.displayParameters()}
      </div>
    );
  }
}

export default Modify;
