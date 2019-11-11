import React, { Component } from 'react';


class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="figure">
                <h3>{this.props.nameFigure}</h3>
                <img src={this.props.imgFigure}></img>
                <h4>{this.props.descr}</h4>
            </div>
         );
    }
}
 
export default Single;