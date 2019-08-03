import React,{Component} from 'react';

export default class Logo extends Component{
    render() {
        return (
            <img src={this.props.image} alt="Logo" 
              width={this.props.width} 
              height={this.props.height}
              />
        );
    }
}