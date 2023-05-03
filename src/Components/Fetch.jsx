import React,{useState,useEffect} from 'react'
import { MdOutlineWatchLater} from 'react-icons/md';

function Fetch() {

    let[vid,setVid]=useState({})
    useEffect(()=>{
        fetch("https://spotify23.p.rapidapi.com/search/?q=${q}&type=multi",{
            method:"GET",
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '87f1a2b6admshcb069a17d5ae7eap1c028fjsnf63029832d20',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
        }).then((res)=>res.json()).then((data)=>{setVid(data);console.log(data)})
    },[])
    let tstyle={
        border:"1px solid black",
        width:"100%",
        textAlign:"left",
            }
            let he={
                textAlign:"center"
            }
            
  return (
    <div>
        <h1>Your Library</h1>
        <table style={tstyle}>
            <tr style={tstyle}>
                <th style={he}>#</th>
                <th style={he}>Title</th>
                <th style={he}>Album</th>
                <th style={he}><MdOutlineWatchLater/></th>
            </tr>
            <tr>
             
            </tr>
        </table>
    </div>
  )
}

export default Fetch