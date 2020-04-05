import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
      ],
      search: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((monsters) => {
      this.setState({monsters});
    });
  }

  handleChange = (e) => {
      this.setState({search: e});
  }

  render() {
    const {search, monsters } = this.state; 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().startsWith(search.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox search={ this.handleChange }/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
