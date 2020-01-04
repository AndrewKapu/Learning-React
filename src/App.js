import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const user = {
      name: 'John',
      lastName: 'Smith',
    }
    return(
      <div className="App">
        <p>Mr. <strong>{user.name} {user.lastName}</strong>, it's nice to see you</p>
      </div>
    );
  }
}

export default App;
