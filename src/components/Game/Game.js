import React from 'react';
import'./Game.css'

const Game = ({game,addTime}) => {
    //console.log(game)
    const{_id,picture,age,time,title
    }=game
    return (
        <div className='items'>
        <img src={picture} alt="" />
        <div className='item-info'>
            <h2 className='title'>{_id}</h2>
           
            <p>For Age : {age}</p>
            <p>Time required : {time}</p>
            <button onClick={()=>addTime(game)} className='button'>Add to list</button>
        </div>

    </div>
       
    );
};

export default Game;