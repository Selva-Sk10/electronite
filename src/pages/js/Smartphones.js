import "../css/Smartphones.css";
import Card from "../../components/js/Card";

export default function Smartphones(props){
    const {addToCart,data} = props;

    let card = data.smartphones.map(item => (
        <Card 
            key={item.id}
            item={item}
            {...item}
            addToCart={addToCart}
        />
    ));

    return(
        <section className="smartphones">
            <div className="header">
                <h1>Smartphones</h1>
            </div>
            <div className="wrapper">
                <div className="cards">
                    {card}
                </div>
            </div>
        </section>
    );
}