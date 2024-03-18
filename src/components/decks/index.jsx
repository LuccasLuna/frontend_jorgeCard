import { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import './styles.css';

export class Decks extends Component {
  state = {
    decks: [
      {
        id: 1,
        name: 'nomeDeck',
      },
      {
        id: 2,
        name: 'nomeDeck',
      },
      {
        id: 3,
        name: 'nomeDeck',
      },
    ]
  }

  render() {
    const { decks } = this.state;
    return(
      <div className='decks-container'>
        <div className='decks-subcontainer'>
          <div className='decks'>
            {decks.map(deck => (
              <div className='deck' key={deck.id}>
                  <p>{deck.name}</p>
              </div>
            ))}
              <div className='deck'>
                  <a href="/"className='deck-plus'><FaPlus size={60} color='#15AA73' /></a>
              </div>
          </div>
        </div>
      </div> 
    );
  }
}