import "../css/Laptops.css";
import Card from "../../components/js/Card";

export default function Laptops(props){
    const {addToCart,data} = props;

    let card = data.laptops.map(item => (
        <Card 
            key={item.id}
            item={item}
            {...item}
            addToCart={addToCart}
        />
    ));

    return(
        <section className="laptops">
            <div className="header">
                <h1>Laptops</h1>
            </div>
            <div className="wrapper">
                <div className="cards">
                    {card}
                </div>
            </div>
        </section>
    );
}