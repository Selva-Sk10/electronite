import "../css/Home.css";
import {Link} from "react-router-dom";
import camera from "../img/hero/camera.webp";
import Card from "../../components/js/Card";

export default function Home(props) {
    const { addToCart, data } = props;

    const card = [];
    for (let i = 0; i < 4; i++) {
        let isNew = true;
        let num1 = Math.floor(Math.random() * Object.keys(data).length);
        let product = Object.keys(data)[num1];
        
        let num2 = Math.floor(Math.random() * data[product].length);
        let item = data[product][num2];
        
        for(let j of card){
            if(j.props.item.id === item.id){
                isNew = false;
                i--;
                break;
            }
        }
        
        if(isNew){
            card.push(
                <Card
                    key={item.id}
                    item={item}
                    {...item}
                    addToCart={addToCart}
                />
            );
        }
    }

    return (
        <section className="home">
            <div className="hero">
                <div className="image">
                    <Link to="/cameras"><img src={camera}></img></Link>
                </div>
            </div>
            <div className="wrapper">
                <h2>Collections</h2>
                <div className="collection">
                    <div className="box">
                        <div className="image">
                            <img src="../img/laptops/img-5.jpg"></img>
                        </div>
                        <div className="content">
                            <h3>Laptops<br></br>Collection</h3>
                            <Link to="/laptops"><p>Shop Now</p></Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="../img/smartphones/img-6.jpg"></img>
                        </div>
                        <div className="content">
                            <h3>Smartphones<br></br>Collection</h3>
                            <Link to="/smartphones"><p>Shop Now</p></Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="../img/cameras/img-3.jpg"></img>
                        </div>
                        <div className="content">
                            <h3>Cameras<br></br>Collection</h3>
                            <Link to="/cameras"><p>Shop Now</p></Link>
                        </div>
                    </div>
                </div>
                <div className="new-products">
                    <h2>New Products</h2>
                    <div className="cards">
                        {card}
                    </div>
                </div>
            </div>
        </section>
    );
}