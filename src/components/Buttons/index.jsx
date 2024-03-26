import { Component } from 'react';

import './styles.css';
import Virar from '../../assets/img/virar-img.svg';
import Dificil from '../../assets/img/dificil-img.svg';
import Facil from '../../assets/img/facil-img.svg';

export class Buttons extends Component {

    handleButton() {
      
    }
    render() {
      return (
        <div className="container-buttons">
          <button style={{ backgroundColor: '#CF5555' }}><img src={Dificil} alt="hard-button" width={25} height={25}/></button>
          <button style={{ backgroundColor: '#15AA73' }}><img src={Virar} alt="flip-button" width={25} height={25}/></button>
          <button style={{ backgroundColor: '#47ABCA' }}><img src={Facil} alt="easy-button" width={25} height={25}/></button>
        </div>
      );
    }
}