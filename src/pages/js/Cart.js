import "../css/Cart.css";

export default function Cart(props) {
    const { cart, removeFromCart } = props;

    const cartItem = cart.map(item => (
        <div className="cart-card" key={`${item.category}-${item.id}`}>
            <div className="image">
                <img src={`./img/${item.category}/${item.image}`}></img>
            </div>
            <div className="content">
                <h2>{item.title}</h2>
                <div className="price-info">
                    <p>Rs.{item.price}</p>
                    <p>Rs.{item.strikedPrice}</p>
                    {item.offer && <p>{`(${item.offer}% off)`}</p>}
                </div>
                <div className="btn">
                    <button onClick={() =>{removeFromCart(item)}}>Remove</button>
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
                {/* <div className="payment">
                    <p>Total Price:</p>
                    <p>No. of Items:</p>
                    <div className="btn">
                        <button>Proceed to Payment</button>
                    </div>
                </div> */}
                <div className="cart-cards">
                    {cartItem}
                </div>
            </div>
        </section>
    );
}