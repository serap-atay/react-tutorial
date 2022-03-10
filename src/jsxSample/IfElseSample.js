import React from 'react'

function IfElseSample() {
    let onlineSatus=false
  return (
    <>
    { 
        onlineSatus == true ? (<h1>User Online </h1>) : (<h1>Offline</h1>)
    }
    </>
  )
}

export default IfElseSample