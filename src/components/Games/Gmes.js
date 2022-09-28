import React, { useEffect, useState } from 'react';
import Count from '../coutn/Count';
import Game from '../Game/Game';
import'./gmes.css'

const Gmes = () => {
    const[games,setGames]=useState([])
    useEffect(()=>{
        fetch('data.json')

        .then(res=>res.json())
        .then(data=>setGames(data))
    },[])
    const[times,setTmie]=useState([])
   
    const addTime=(game)=>{
       // console.log(game)
         const newTime=[...times,game]
         setTmie(newTime)
    }
   
   
    
    return (
        <div>
            <div className='container'>
            <div className='service-container'>
                {
                    games.map(game=><Game game={game} addTime={addTime}></Game>)
                }
            </div>
           
           <div className="container">
              
               <Count time={times}></Count>
              
               
           </div>
          </div>
           </div>
       
    );
};

export default Gmes;