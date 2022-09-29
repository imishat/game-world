import React, { useState } from 'react';
import'./count.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { addToTime } from '../data/Data';

const Count = ({count}) => {
   console.log(count)
   // const{count}=props
  // console.log(time.time)
    let sum=0
    for(const total of count){
       // console.log(typeof(time.time))
        sum=parseFloat(sum+total.time)
       
    }
    console.log(sum)
    const[b,setB]=useState(0)
    const addTime=(add)=>{
        setB(add)
        addToTime(add)

      
        
    }
    
    
        const showToastMessage = () => {
            toast.success('Well Done', {
                position: toast.POSITION.TOP_CENTER
            });
        }
       
    
   
    
    return (
        <div className='cart-container' >

        <div className='profile' >
            
            <h4>Mojahid islam Mishat</h4>
        </div>
        <div className='box' >
            <div>
                <h5>80<small>kg</small></h5>
                <p>Weight</p>
            </div >
            <div>
                <h5>5.11<small>feet</small></h5>
                <p>Height</p>
            </div>
            <div>
                <h5>20</h5>
                <p>Age</p>
            </div>
        </div >
        <div>
            <h4>Add A Break</h4>
            <div className='btn-2'>
               
                <button onClick={()=>addTime(30)}>30s</button>
                <button onClick={()=>addTime(40)}>40s</button>
                <button onClick={()=>addTime(50)}>50s</button>
                <button onClick={()=>addTime(60)}>60s</button>
               
            </div>
        </div>
        <div>
            <h4>select Item:{count.lenght}</h4>
            <div className='timer'>
                <h3>  Total time</h3>
                <p>{sum} seconds</p>
            </div>
            <div className='timer'>
                <h3>Break time</h3>
                <p>{b}</p>
            </div>
            <button onClick={showToastMessage} className='titel'>Activity Completed</button>
            <ToastContainer />
        </div >
        
    </div >
        
    );
};

export default Count;