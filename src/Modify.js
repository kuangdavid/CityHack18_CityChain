import React, { Component } from 'react';
import AppBar from '../node_modules/material-ui/AppBar';
import TextField from '../node_modules/material-ui/TextField';
import FlatButton from '../node_modules/material-ui/FlatButton';
import {Card, CardActions} from '../node_modules/material-ui/Card';

import './App.css';

const successcolor = '#5cb85c';
const errorcolor = '#d9534f';

class Modify extends Component {
  constructor(props) {
    super(props);
    this.state={
    	isWarning: true,
    	field1Color: errorcolor,
    	field2Color: successcolor,
    	field3Color: successcolor,
    	field4Color: successcolor,
    	field5Color: successcolor,
    	field6Color: errorcolor,
    	field1Text: 'This value is too high.',
    	field2Text: '',
    	field3Text: '',
    	field4Text: '',
    	field5Text: '',
    	field6Text: 'This value is too high.',
    }
  }
  displayTitle() {
  	if (this.state.isWarning) {
  		return (
  			<AppBar
	          title="Warning Some parameters are not possible. Please adjust setting."
	          iconElementLeft={
	          	<i className="material-icons" style={{fontSize: 45}}>error</i>
	          }
	          iconElementRight={<div/>}
	          style={{backgroundColor: errorcolor}}
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
	          style={{backgroundColor: successcolor}}
	        />
	  	);
  	}
  }
  displayAction() {
  	if (this.state.isWarning) {
  		return (<div />);
  	} else {
  		return (
  			<CardActions>
				<FlatButton
	              icon={<i className="material-icons">autorenew</i>}
	              style={{width: '20%'}}
      			  label="Analyse"
      			  backgroundColor={successcolor}
	              onClick={() => {
	              	this.props.callBackFunc('Result');
	              }}
	            />
			</CardActions>
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
					errorcolor={this.state.field1Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value, 10) < 50) {
							this.setState({
								field1Text: '',
								field1Color: successcolor,
								isWarning: this.state.field6Color === errorcolor
							});
						} else {
							this.setState({
								field1Text: 'This value is too high.',
								field1Color: errorcolor,
							});
						}
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field2Color}}
					errorcolor={this.state.field2Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value, 10) <= 100) {
							this.setState({
								field2Text: '',
								field2Color: successcolor,
							});
						} else {
							this.setState({
								field2Text: 'This value is too high.',
								field2Color: errorcolor,
							});
						}
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field3Color}}
					errorcolor={this.state.field3Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value, 10) <= 100) {
							this.setState({
								field3Text: '',
								field3Color: successcolor,
							});
						} else {
							this.setState({
								field3Text: 'This value is too high.',
								field3Color: errorcolor,
							});
						}
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field4Color}}
					errorcolor={this.state.field4Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value, 10) <= 100) {
							this.setState({
								field4Text: '',
								field4Color: successcolor,
							});
						} else {
							this.setState({
								field4Text: 'This value is too high.',
								field4Color: errorcolor,
							});
						}
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field5Color}}
					errorcolor={this.state.field5Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value, 10) <= 100) {
							this.setState({
								field5Text: '',
								field5Color: successcolor,
							});
						} else {
							this.setState({
								field5Text: 'This value is too high.',
								field5Color: errorcolor,
							});
						}
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Styled Floating Label Text"
					floatingLabelStyle={{color: this.state.field6Color}}
					errorcolor={this.state.field6Text}
					style={{width: '80%'}}
					defaultValue={100}
					onChange={e => {
						if(parseInt(e.target.value, 10) < 50) {
							this.setState({
								field6Text: '',
								field6Color: successcolor,
								isWarning: this.state.field1Color === errorcolor
							});
						} else {
							this.setState({
								field6Text: 'This value is too high.',
								field6Color: errorcolor,
							});
						}
					}}
			    />
			</div>
			{this.displayAction()}
	  	</Card>
  	);
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
