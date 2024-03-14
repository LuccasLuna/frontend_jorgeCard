import { Component } from 'react';
import './styles.css';

export class Decks extends Component {
  state = {
    decks: [
      {
        id: 1,
        name: 'nomeDeck',
        question: 'dwuahndaihbfnwaifubaifafwafafafafaf',
        answer: 'efsfunjsfuinsfiujsnbfisnfsfsf'
      },
      {
        id: 2,
        name: 'nomeDeck',
        question: 'dwuahndaihbfnwaifubaifafwafafafafaf',
        answer: 'efsfunjsfuinsfiujsnbfisnfsfsf'
      },
      {
        id: 3,
        name: 'nomeDeck',
        question: 'dwuahndaihbfnwaifubaifafwafafafafaf',
        answer: 'efsfunjsfuinsfiujsnbfisnfsfsf'
      },
    ]
  }

  render() {
    const { decks } = this.state;
    return(
      <div className='decks-container'>
        <div className='decks'>
          
          {decks.map(deck => (
            <div className='deck' key={deck.id}>
              <div>
                <p>{deck.name}</p>
                <p>{deck.id}</p>
              </div>
            </div>
          ))}
        </div>  
      </div> 
    );
  }
}