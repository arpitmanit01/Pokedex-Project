import React,{Component} from 'react'
import './Pokecard.css'

const API_LINK="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component{
    render(){
        let imgLink = `${API_LINK}${this.props.id}.png`;
        return (
            <div className="Pokecard">
            <img src={imgLink}/>
            <h3>Name = {this.props.name}</h3>
            <h3>Type = {this.props.type}</h3>
            <h3>Id = {this.props.id}</h3>
            <h3>Exp = {this.props.base_experience}</h3>
            </div>
            )
    }

}




export default Pokecard;