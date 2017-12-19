import React from 'react';

class Input extends React.Component{
	render(){
		return <input type="text" id="one" onKeyPress={this.props.onkeypress}/>
	}
}

export default Input;