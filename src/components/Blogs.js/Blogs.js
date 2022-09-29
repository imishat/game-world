import React from 'react';
import'./blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className="Blogs">
                <div className='titel'>
                    <h1> How does React work?</h1>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </div>
                <div className='titel'>
                < h1>Difference between state and props?</h1>
                <p> Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
 </p>
                </div>
                <div className='titel'>
                    <h1>why use useeffect in react</h1>
                    <p> useState can be used to toggle between two values, usually true and false , in order to toggle a flag, such as the display mode </p>

                </div>
                
            </div>

        </div>
    );
};

export default Blogs;