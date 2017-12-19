import React from 'react';

class Table extends React.Component{
	render(){
		return(
			<table id="two">
				{this.props.loop.map((val,index) => (
              <tr key={index}  onClick={this.props.onclick(index)}>
                <td>{val}</td>
              </tr>
              ))}
			</table>
			);
	}
}

export default Table;