import React from 'react';

class Heading extends React.Component{
	render(){
		return <h1>TO DO LIST ({this.props.count})</h1>
	}
}

export default Heading;