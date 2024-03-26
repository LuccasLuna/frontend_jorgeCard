import { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import './styles.css';
import '../../styles/globalStyles.css';
import background from '../../assets/img/ondas-pato.svg';

export class Decks extends Component {
    // state = {
    //   deck: []
    // }

  
  render() {
    const { decks, handleClick } = this.props;

    const deckCards = [...decks];
    
    return(
      <div className='main-container' style={{backgroundImage: `url(${background})`}}>
        {/* {console.log(deckCards)} */}
        <div className='decks-container'>
          <div className='decks'>
            {deckCards.map(deck => (
              <a href="/" className='deck' key={deck.id} onClick={handleClick} id={deck.id}> 
                {deck.name}
              </a>
            ))}
            <a href="/"className='deck-plus deck'>
              <FaPlus size={60} color='#15AA73' />
            </a>
          </div>
        </div>
      </div> 
    );
  }
}