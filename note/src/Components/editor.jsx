import React, { Component } from 'react'
import '../App.css'
import Glogo from '../assets/G logo.png'

export default class editor extends Component {
    
    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }

    //event handler method to change the state.
//setState is used to change the state.
  handleChange(e){
    this.setState({value: e.target.value});
}

clearOut=()=>{
    this.setState({value: ''});
    document.getElementsByClassName("input-text")[0].value = "";
}

  render() {
    return (
<div>
<div className="container">

                <div className="input">
                    <h3>Input</h3>
                    <img src={Glogo} id="gram" onClick = {this.clearOut} />
                    <textarea className="input-text" onChange={this.handleChange} Value={this.state.value}/>
                </div>

                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
</div>
    )
  }
}
