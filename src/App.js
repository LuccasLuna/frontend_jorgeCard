import { Component } from 'react';


import './App.css';
import { Navbar }  from './components/navBar';
import { Decks }  from './components/decks';

export class App extends Component {

  render() {
    
    return(
      <div className="App">
        <Navbar />
        <Decks/>
      </div>
    );
  }

}

