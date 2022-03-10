import React, { useEffect, useState } from 'react'

function ProductPage() {

    const [products , setProduct]=useState([])
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
        .then((result) => result.json)
        .then((data)=>{
            setProduct(data)
        })
    } , [])
  return (
    <>
        <ProductList products={products}></ProductList>
    </>
  )
}

export default ProductPage