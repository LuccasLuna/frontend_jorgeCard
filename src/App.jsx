import { Component } from 'react';


import './App.css';
import { Navbar }  from './components/NavBar';
import { Decks }  from './components/Decks';
import { Cards }  from './components/Cards';

export class App extends Component {
  state = {
    decks: [
      {
        id: 1,
        name: 'sei la mermao',
        questions: ['1','qual o nome do meu cachorro?','qual o mes do ano que tem apenas 28 dias?','me da dez real ai?'],
        answers: ['eu não tenho cachorro','sei la mermao','só se vc me emprestar 20 antes']
      },
      {
        id: 2,
        name: 'tchubira birom',
        questions: ['2','qual o nome do meu cachorro?','qual o mes do ano que tem apenas 28 dias?','me da dez real ai?'],
        answers: ['eu não tenho cachorro','sei la mermao','só se vc me emprestar 20 antes']
      },
      {
        id: 3,
        name: 'hã ?',
        questions: ['3','qual o nome do meu cachorro?','qual o mes do ano que tem apenas 28 dias?','me da dez real ai?'],
        answers: ['eu não tenho cachorro','sei la mermao','só se vc me emprestar 20 antes']
      },
    ],
    deckId: null,
  }
  handleClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    this.setState({ deckId: id})
  }
  render() {
    const { decks, deckId} = this.state;
    return(
      <div className="App">
        <Navbar />
        {console.log(deckId)}
        {/* deckId é  nulo? se sim, renderiza decks. se não, renderiza cards */}
        {!deckId ? <Decks decks={decks} handleClick={this.handleClick}/> : <Cards decks={decks} deckId={deckId}/>}
      </div>
    );
  }

}

