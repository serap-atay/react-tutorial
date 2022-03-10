import React from 'react'

function ProductList(props) {
  return (
   <>
        <table>

            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Units in Stock</th>
                <th>Price</th>
            </tr>
                {
                    props.products.map((item , key)=>{
                        return (
                            <tr key={key}>
                                <td>{item.id}</td>   
                                <td>{item.name}</td>   
                                <td>{item.unitsInstock}</td>   
                                <td>{item.unitPrice}</td>   
                            </tr>
                        )
                    })   
                }
        </table>
   
   </>
  )
}

export default ProductList