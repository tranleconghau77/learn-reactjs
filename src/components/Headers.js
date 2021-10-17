import React from "react";

const Header=()=>{
    const headerStyle={
        color:'red',
        fontWeight:'bold',
        textAlign:'center',
        background:'#333',
        padding:'20px'
    }
    return (
        <header>
            <h1 style={headerStyle}> TO DO LIST</h1>
        </header>
    )
}
export default Header