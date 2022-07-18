import "../css/Cart.css";
import { useState, useEffect } from "react";

export default function Cart(props) {
    const {cart, setCart, removeFromCart, count} = props;
    const [price, setPrice] = useState(0);

    useEffect(() =>{
        let num = 0
        cart.forEach(item =>{
            let p = item.price.split(",").join("");
            num += parseInt(p) * parseInt(item.qty);
        });
        
        setPrice(num);
    });

    function incrementQty(itemId){
        const addQty = cart.map(item =>(
            item.id === itemId ? {...item, qty: item.qty+=1} : item
        ));
        
        setCart(addQty);
    }

    function decrementQty(itemId){
        let isExecute = true;
        const subQty = cart.map(item =>(
            item.id === itemId ? subFun(item) : item
        ));

        function subFun(item){
            if(item.qty === 1){
                removeFromCart(item);
                isExecute = false;
            }else{
                return {...item, qty: item.qty-=1}
            }
        }

        if(isExecute){
            setCart(subQty);
        }
    }

    const cartItem = cart.map(item => (
        <div className="cart-card" key={`${item.category}-${item.id}`}>
            <div className="image">
                <img src={item.image}></img>
            </div>
            <div className="content">
                <h2>{item.title}</h2>
                <div className="price-info">
                    <p>Rs.{item.price}</p>
                    <p>Rs.{item.strikedPrice}</p>
                    {item.offer && <p>{`(${item.offer}% off)`}</p>}
                </div>
                <div className="btns">
                    <div className="qty-btn">
                        <span>Quantity:</span>
                        <button onClick={() =>{decrementQty(item.id)}}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() =>{incrementQty(item.id)}}>+</button>
                    </div>
                    <div className="remove-btn">
                        <button onClick={() =>{removeFromCart(item)}}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <section className="cart">
            <div className="header">
                <h1>Shoping Cart</h1>
            </div>
            <div className="wrapper">
                <div className="payment">
                    <p>Total Price: Rs.{price}</p>
                    <p>No. of Items: {count}</p>
                    <div className="btn">
                        <button>Proceed to Payment</button>
                    </div>
                </div>
                <div className="cart-cards">
                    {cartItem.length === 0 ? <h1>Your cart is empty!</h1> : cartItem }
                </div>
            </div>
        </section>
    );
}