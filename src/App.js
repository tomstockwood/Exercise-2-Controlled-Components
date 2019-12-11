import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestButton from './TestButton.js'
import EnterText from './EnterText.js'
import GenericButton from './GenericButton.js'
import ItemList from './ItemList.js'


class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <EnterText
          value={this.state.value}
          handleChange={this.handleChange}
          addItem={this.addItem}
        />

        <GenericButton 
          deleteLastItem={this.deleteLastItem}
          disabled={this.state.items.length === 0}
        >
          Delete Last Item
        </GenericButton>

        <ItemList
          items = {this.state.items}
        >
        </ItemList>

      </div>
    );
  }
}

export default App;
