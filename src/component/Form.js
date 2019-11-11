import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="form">
                <form onSubmit={this.props.submit}>
                    <input onClick={this.props.click} value={this.props.value} onChange={this.props.change}></input>
                    <button type="submit">Button</button>
                </form>
            </div>
         );
    }
}
 
export default Form;