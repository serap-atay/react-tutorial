import React from 'react'

function JsxEvent() {
    let name="Güzel"

    const hello=()=>{
        name="Gizem"
        console.log("JSX event çalıştı.")
    }
  return (
    <>
    {name}
    <button onClick={()=>hello()}>Hello!</button>
    </>
  )
}

export default JsxEvent