import { Component } from 'react';

import './styles.css';

export class Navbar extends Component {

  render () {
    return(
      <nav className='navegation'>
        <div className='user'>
          <img className='avatar' 
          src="https://images.unsplash.com/photo-1465153690352-10c1b29577f8?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="avatar" 
          />
          <p>Nome do usuario</p>
        </div>
        <ul>
          <li>Decks</li>
          <li>Stats</li>
          <li>Sair</li>
        </ul>
      </nav>
    );
  }

}