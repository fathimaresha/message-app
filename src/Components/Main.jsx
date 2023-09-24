import React, { useState } from 'react'

function Main() {

    const [content,setContenet]=useState( ' ' )

    function show(){
        setContenet("Hello!")
    }
    function hide(){
        setContenet( ' ' )
    }
  return (
    <div className='m-3 p-5'>
       <div><b>{content}</b></div>
            
            <button onClick={show} className="btn btn-primary">show messasge</button><p></p>
            <button onClick={hide} className="btn btn-primary">Hide messasge</button>
        </div>
        
        
    
  )
}

export default Main