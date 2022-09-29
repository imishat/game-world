
import './App.css';
import Blogs from './components/Blogs.js/Blogs';
import Gmes from './components/Games/Gmes';

import Header from './components/Header/Header';

function App() {
    return ( 
        <div className = "App" >
        
        <Header/>
        <Gmes></Gmes>
        <Blogs></Blogs>
        
        </div>
    );
}

export default App;