// import logo from './logo.svg';
import React ,{Component} from 'react'
import './App.css';
import Pokegame from './Pokegame.js'

class App extends Component{
  render(){
    return (
    <div className="App">
      <h1>Pokedex Project</h1>
      <Pokegame/>

    </div>
    )
  }
}


export default App;
