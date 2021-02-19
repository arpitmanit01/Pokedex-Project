// import logo from './logo.svg';
import React ,{Component} from 'react'
import './App.css';
import Pokedex from './Pokedex.js'

class App extends Component{
  render(){
    return (
    <div className="App">
      <h1>Pokedex Project</h1>
      <Pokedex/>

    </div>
    )
  }
}


export default App;
