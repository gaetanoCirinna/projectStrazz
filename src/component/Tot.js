import React, { Component } from 'react';
import Single from './Single';
import Form from './Form';

class Tot extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: [],
            descr: [],
            img: [],
            value: ""
         }
    }

    submit = (e) => {
        e.preventDefault();

        if(this.state.value != ""){
            this.setState({
                name: [...this.state.name, this.state.value]
            })
        }

    }
    change = (e) =>{
        this.setState({
            value: e.target.value
        })
    }
    render() { 
        let cards = [];
        for(let i=0; i<this.state.name.length; i++){
            cards.push(
                <Single nameFigure = {this.state.name[i]}></Single>
            )
        }

        return ( 
            <div>
                
                {cards}
                <Form submit={this.submit} click={this.click} value={this.state.value} change={this.change}></Form>
            </div>
         );
    }
}
 
export default Tot;