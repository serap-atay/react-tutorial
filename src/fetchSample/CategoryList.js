import React from 'react'

function CategoryList(props) {
    const {categories}=props
  return (
    <>
        <ul>
            {
                categories && categories.map((item , key)=>{
                    return (<li key={key}>{item.name}</li>)
                })
             }

        </ul>
    </>
  )
}

export default CategoryList