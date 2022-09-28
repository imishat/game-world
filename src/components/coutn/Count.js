import React from 'react';

const Count = (props) => {
   // console.log(props)
    const{time}=props
   console.log(time.title)
    let sum=0
    for(const total of time){
       // console.log(typeof(time.time))
        sum=sum+total.time
       
    }
    //consolelog(sum)
   
    
   
    
    return (
        <div>
            <h1>time:{time.lenght}</h1>

        </div>
    );
};

export default Count;