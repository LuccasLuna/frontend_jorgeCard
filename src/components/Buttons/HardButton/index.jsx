import { Component } from 'react';


export class HardButton extends Component {
    state = {
      flipButton: false,
    }

    handleChange() {
      return this.setState({flipButton: true});
    }
    render() {
      return (    
        <button onClick={this.handleChange}>Virar</button>
      );
    }
}