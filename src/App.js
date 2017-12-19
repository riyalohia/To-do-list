import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Heading from './Heading';
import Table from './Table';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {rows:[],count:0};
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleKeyPress(e){
    if(e.key === 'Enter'){
      var val = document.getElementById("one").value;
      document.getElementById("one").value="";
      var newvalue = [ val ];
      this.setState({
        rows:this.state.rows.concat(newvalue),
        count:this.state.count+1
      });
    }

  }
  handleClick(index,e){
    var array = this.state.rows;
    array.splice(index,1);
    this.setState({
      rows:array,
      count:this.state.count-1
    });
  }
  render() {
    return (
      <div>
       <Heading count={this.state.count} />
        <center>
          <Input onkeypress={this.handleKeyPress} />
          <Table loop={this.state.rows} onclick={(index) => this.handleClick.bind(this,index)}/>
        </center>
      </div>
      );
  }
}

export default App;
