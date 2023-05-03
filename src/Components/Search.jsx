import React ,{useState,useEffect}from 'react'


function Search() {
  const [inp, setInp] = useState('');
  const[button,setButton]=useState([]);
  const[vid,setVid]=useState([]);


  useEffect(()=>{
          fetch("https://spotify23.p.rapidapi.com/search/?q=~${inp}",{
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
    
  const show=()=>{
if(inp!==""){
     setButton(<div  style={{display:"flex",flexWrap:"wrap"}} >
          {vid.episodes.items.map((ele)=>{
            return <div style={{boxShadow:"0px 0px 10px 3px #121212",borderRadius:"10px",padding:"10px",margin:"10px",width:"13vw",display:"flex",flexDirection:"column"}}>
              <img  width="100%" src={ele.data.coverArt.sources[1].url} alt="img"/>
              <p>{ele.data.name}</p>
              <p>{ele.data.contentRating.label}</p>
              </div>
          })}
     </div>)}
     else{
      setButton(<h1>
        Search for some trending Tracks...
      </h1>)
     }
     console.log(vid)
  }
  const clear=()=>{
   setButton([])
   setInp("")

  }
  return (
    <div  style={{}}>
        <h1>Search component</h1>
        <input className='searchinput' value={inp} onChange={(e)=>setInp(e.target.value)}  type='text' placeholder='  What do you want to listen to!?'/>
        <button className='Search' onClick={show}>Search</button>
        <button className='clear' onClick={clear}>Clear</button>
        <div>
           {button}
        </div>
    </div>
  )
}

export default Search