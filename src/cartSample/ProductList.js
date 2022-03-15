import Item from 'antd/lib/list/Item';
import React from 'react'

function ProductList() {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const {cart, setCart} = useContext(cartContext)
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
        .then(res => res.json())
        .then((data) => {
            setProductList(data);
        })
    }, [])
    useEffect(() => {
        let price=0;
        cart.map((Item , key)=>{
            price = price + (item.quantity * item.price);
        });
    }, [])

    const addToCart=(item)=>{
        var CartProduct=cart.find(q=>q.id == item.id)
        if(CartProduct!=undefined){
            item.quantity+=1;
            setCart([...cart])
        }
        else{
            var newCartProduct={
                id:item.id,
                quantity: 1,
                name: item.name,
                price: item.unitPrice
            }
            setCart([...cart], newCartProduct)
        }
    }
    const emptyCart=()=>{
        setCart([])
    }
    const removeItem=(id)=>{
        var newCartProduct=cart.filter(q=>q.id!=id);
        setCart([...newCartProduct])
    }
    
  return (
    <>
    {/* <h1>Cart count: {cart.length}</h1> */}
    <h1>Total Price:  {totalPrice.toFixed(2)}</h1>
    <button onClick={() => emptyCart()}>Empty Cart</button>

    <CartList remove={removeItem}></CartList>

    <hr></hr>
    <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Unit Price</td>
            <td>Add to Cart</td>
        </tr>

        {
            products && products.map((item, key) => {
                return <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.unitPrice}</td>
                    <td><button onClick={() => addToCart(item)}>Add to CART</button></td>
                </tr>

            })
        }
    </table>
</>
  )
}

export default ProductList