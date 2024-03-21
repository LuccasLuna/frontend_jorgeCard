import { Component } from 'react';
import './styles.css';
import '../../styles/globalStyles.css'
import background from '../../assets/img/ondas-verde2.svg';
import { Buttons } from '../Buttons'

export class Cards extends Component{
  render() {
    // const { decks, deckId } = this.props;
    return(
      <div className='main-container' style={{backgroundImage: `url(${background})`}}>
        <div className="container-cards">
          <div className='cards'>
            <div className='card' style={{backgroundColor: '#fff'}}>PERGUNTA</div>
            {/* essa div de resposta deveria existir? achuquenaum */}
            <div className='card' style={{backgroundColor: '#15AA73', display: 'none'} }>ESTE CARD SÓ SERA CHAMADO QUANDO APERTAR O BOTAO FLIP</div> 
          </div>
          <div className='buttons'>
            <Buttons/>
          </div>
        </div>
      </div>
    );
  }
}