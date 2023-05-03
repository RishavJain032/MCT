import React from 'react'
import { RiArrowLeftSLine,RiArrowRightSLine } from 'react-icons/ri';

function Navbar() {
    let arrowstyle={
        color:"white",
        backgroundColor:"black",
        borderRadius:"50%",
        border:"0",
        height:"2.5rem",
        fontSize:"1.5rem",
        padding:"8px",
        cursor:"pointer"
    }
  return (
    <div className='navdiv'>
        <div style={{display:"flex",justifyContent:"space-between",width:"6.5vw"}}><button style={arrowstyle} > <RiArrowLeftSLine/> </button>
        <button style={arrowstyle}><RiArrowRightSLine/> </button></div>
        <div style={{display:"flex",width:"18%",justifyContent:"space-between"}}>
        <button className='sign'>Sign Up</button>
        <button className='log'>Log In</button>
        </div>
    </div>
  )
}

export default Navbar