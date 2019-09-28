import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
     <header>
         <h3 style={headerStyle}>Todo item list</h3>
      <Link to="/">Home</Link>|<Link to="/about">About</Link>
     </header>
    
    )
}
const headerStyle={
    background: '#333',
    color: '#fff',
    padding: '5px 10px',
    textAlign: 'center',
}
export default Header