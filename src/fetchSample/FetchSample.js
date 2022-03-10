import React, { useEffect, useState } from 'react'

function FetchSample() {
    const [categories ,setCategories]=useState([])
    useEffect(()=>{
        fetch('https://northwind.vercel.app/api/categories')
        .then((response)=> response.json())
        .then((data)=>{
            setCategories(data)
        });
    } , [])
  return (
    <>
        <ul>
            {
                categories.map((item , key)=>{
                    return (<li key={key}>{item.name}</li>)
                })

            }

        </ul>
    </>
  )
}

export default FetchSample