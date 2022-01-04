import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';

class App extends Component {

  constructor(){
    super();

    this.state ={
      monsters: [
        
      ],
      searchField :''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">
      <h1> We Are Monsters </h1>
      <SearchBox placeholder="search monsters" handleChange ={e=> this.setState({searchField: e.target.value})} />
      <CardList monsters ={filteredMonsters} /> 
      <h3>-----Rezwan Faysal-----</h3>
      </div> 
    );
  }
}

export default App;
