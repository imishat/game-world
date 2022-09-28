import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import'./gmes.css'

const Gmes = () => {
    const[games,setGames]=useState([])
    useEffect(()=>{
        fetch('data.json')

        .then(res=>res.json())
        .then(data=>setGames(data))
    },[])
    return (
        <div>
            <div className='container'>
            <div className='service-container'>
                {
                    games.map(game=><Game game={game}></Game>)
                }
            </div>
            <div className='cart-container'>
                <h1>cart section</h1>
               
            </div>
        </div>
        </div>
    );
};

export default Gmes;