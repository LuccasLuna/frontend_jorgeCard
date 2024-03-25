import { Component } from 'react';
import { FlipButton } from '../Buttons/FlipButton';
import { HardButton } from '../Buttons/HardButton';
import { EasyButton } from '../Buttons/EasyButton';


export class Buttons extends Component {
    state = {
      flipButton: false,
    }

    handleChange() {
      return this.setState({flipButton: true});
    }
    render() {
      return (
        <div className="container-buttons">
          <HardButton />
          <FlipButton />
          <EasyButton />
        </div>
      );
    }
}