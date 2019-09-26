import React from 'react';

function Header(){
    return(
     <header><h3 style={headerStyle}>Todo item list</h3></header>
    )
}
const headerStyle={
    background: '#333',
    color: '#fff',
    padding: '5px 10px',
    textAlign: 'center',
}
export default Header