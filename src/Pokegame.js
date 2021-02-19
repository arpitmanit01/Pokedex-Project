import React,{Component} from 'react'
import Pokedex from './Pokedex'

let data=[
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
class Pokegame extends Component{

    render(){
        shuffle(data);
        let hand1=data.slice(0,4)
        let sum1=0;
        for (let i=0;i<hand1.length;i++){sum1+=hand1[i].base_experience ;}
        let hand2=data.slice(4,)
        let sum2=0;
        for (let i=0;i<hand2.length;i++){sum2+=hand2[i].base_experience ;}
        return(
            <div>
            <Pokedex pokemons={hand1} netpow={sum1} isWinner={sum1>sum2}/>
            <Pokedex pokemons={hand2} netpow={sum2} isWinner={sum1<sum2}/>
            </div>
        )
    }
}

export default Pokegame