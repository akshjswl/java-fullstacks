import { useState } from 'react'

function StateDemo() {
    
let[state,setState]=useState("https://tse3.mm.bing.net/th/id/OIP.zmvZy9jxx_hVq-3BySXi5wHaHa?pid=Api&P=0&h=180");
const changeAngular=()=>{
    setState("https://tse1.mm.bing.net/th/id/OIP.OEsew1xTAbTvqJ8ln2aJrgHaH3?pid=Api");
}
const changeReact=()=>{
    setState("https://encoresky.com/wp-content/uploads/2020/04/react-js.webp");
}
  return (
    <div>
        <img src={state}
        height={200}
        width={200}
        alt='no image'/>
        <br/><br/>
        <button onClick={changeAngular}>Angular js</button>
        <button onClick={changeReact}>React js</button>
    </div>
  )
}

export default StateDemo