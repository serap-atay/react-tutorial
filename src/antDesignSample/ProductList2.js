import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Table } from 'antd';

function ProductList2() {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice',
            key: 'unitPrice'
        },
        {
            title: 'Quantity Per Unit',
            dataIndex: 'quantityPerUnit',
            key: 'quantityPerUnit'
        },
        {
            title:'Delete',
            dataIndex:'id',
            key:'id',
            render: (id) => <Button danger onClick={() => deleteProduct(id)}>Delete</Button>
        }
    ];
    const deleteProduct=(id)=>{
        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        fetch("https://northwind.vercel.app/api/products/" + id, requestOptions)
        .then((result) => result.json)
        .then((data)=>{
           getProducts();
        })
        }
        const [productList, setProductList] = useState([]);

        useEffect(() => {
    
            getProducts();
    
        }, []);
    
    
        const getProducts = () => {
            fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then((data) => {
                setProductList(data);
            })
        }
  return (
    <>
    <h1>Product Count :{ }</h1>
    <Table dataSource={productList} columns={columns}></Table>
    </>
  )
}

export default ProductList2