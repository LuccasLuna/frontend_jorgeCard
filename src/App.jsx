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
        name: 'história',
        cards: [
          {
            id: 1,
            question: 'De onde é a invenção do chuveiro elétrico?',
            answer: 'Brasil'
          },
          {
            id: 2,
            question: 'Qual a nacionalidade de Che Guevara?',
            answer: 'Argentina'
          },
          {
            id: 3,
            question: 'Em que período da pré-história o fogo foi descoberto?',
            answer: 'Paleolítico'
          },
          {
            id: 4,
            question: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
            answer: 'João Goulart'
          },
          {
            id: 5,
            question: 'wqedqwednmqd',
            answer: 'que?'
          },
        ]   
      },
      {
        id: 2,
        name: 'matemática',
        cards: [
          {
            id: 1,
            question: '1+1 = ?',
            answer: '2'
          },
          {
            id: 2,
            question: '2+2 = ?',
            answer: '4'
          },
          {
            id: 3,
            question: '3+3 = ?',
            answer: '6'
          },
          {
            id: 4,
            question: '4+4 = ?',
            answer: '8'
          },
          {
            id: 5,
            question: '5+5 = ?',
            answer: '10'
          },
        ]   
      },
      {
        id: 2,
        name: 'conhecimentos gerais',
        cards: [
          {
            id: 1,
            question: 'Qual destes países é transcontinental?',
            answer: 'Rússia'
          },
          {
            id: 2,
            question: 'Quais os planetas do sistema solar?',
            answer: 'Terra, Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio'
          },
          {
            id: 3,
            question: 'Qual o maior animal terrestre?',
            answer: 'Sua mãe'
          },
          {
            id: 4,
            question: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
            answer: 'Dom quixote'
          },
          {
            id: 5,
            question: 'Qual o número mínimo de jogadores em cada time numa partida de futebol?',
            answer: '7'
          },
        ]   
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

