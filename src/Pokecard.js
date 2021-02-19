import React,{Component} from 'react'
import './Pokecard.css'

const API_LINK="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree=(num)=>{
    if (num<=999 && num>=0){
        let result=`00${num}`.slice(-3);
        return result;
    }
    else{
        return `${num}`
    }
}

class Pokecard extends Component{
    render(){
        let imgLink = `${API_LINK}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
            <h4 className="Pokecard-title">{this.props.name}</h4>
            <img src={imgLink}/>
            <div className="Pokecard-data">Type = {this.props.type}</div>
            <div className="Pokecard-data">Exp = {this.props.base_experience}</div>
            </div>
            )
    }

}




export default Pokecard;