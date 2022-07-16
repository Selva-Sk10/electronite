import "../css/Card.css";

export default function Card(props) {
    const {title,image,price,strikedPrice,offer,item,addToCart} = props;

    return (
        <div className="card">
            <div className="image">
                <img src={image}></img>
            </div>
            <div className="content">
                <h2>{title}</h2>
                <div className="price-info">
                    <p>Rs.{price}</p>
                    <p>Rs.{strikedPrice}</p>
                    {offer && <p>{offer}% off</p>}
                </div>
                <div className="btn">
                    <button onClick={() =>{addToCart(item)}}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}