import React, { Component } from 'react';
import AppBar from '../node_modules/material-ui/AppBar';
import TextField from '../node_modules/material-ui/TextField';
import FlatButton from '../node_modules/material-ui/FlatButton';
import {Card, CardText, CardActions} from '../node_modules/material-ui/Card';

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
    	field6Color: successcolor,
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
	          title="Your request is not feasible within the area you selected, please adjust..."
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
	          title="Your request is feasible within the area you selected"
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
	  		<CardText>
				Please adjust the criterias below
			</CardText>
	  		<div>
			    <TextField
					floatingLabelText="Building Units"
					floatingLabelStyle={{color: this.state.field1Color}}
					errorcolor={this.state.field1Text}
					style={{width: '80%'}}
					defaultValue={700}
					onChange={e => {
						if(parseInt(e.target.value, 10) <= 500) {
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
					floatingLabelText="Postcode"
					floatingLabelStyle={{color: this.state.field2Color}}
					errorcolor={this.state.field2Text}
					style={{width: '80%'}}
					defaultValue={'SW3'}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="School proximity"
					floatingLabelStyle={{color: this.state.field3Color}}
					errorcolor={this.state.field3Text}
					style={{width: '80%'}}
					defaultValue={'1 - 3 miles'}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Demographic Age"
					floatingLabelStyle={{color: this.state.field4Color}}
					errorcolor={this.state.field4Text}
					style={{width: '80%'}}
					defaultValue={'25 - 45'}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Average Income"
					floatingLabelStyle={{color: this.state.field5Color}}
					errorcolor={this.state.field5Text}
					style={{width: '80%'}}
					defaultValue={'75K - 125K'}
					onChange={e => {
						
					}}
			    />
			</div>
			<div>
			    <TextField
					floatingLabelText="Flood Zone"
					floatingLabelStyle={{color: this.state.field6Color}}
					errorcolor={this.state.field6Text}
					style={{width: '80%'}}
					defaultValue={'No'}
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
