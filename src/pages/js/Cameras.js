import "../css/Cameras.css";
import Card from "../../components/js/Card";

export default function Cameras(props){
    const {addToCart,data} = props;

    let card = data.cameras.map(item => (
        <Card 
            key={item.id}
            item={item}
            {...item}
            addToCart={addToCart}
        />
    ));

    return(
        <section className="cameras">
            <div className="header">
                <h1>Cameras</h1>
            </div>
            <div className="wrapper">
                <div className="cards">
                    {card}
                </div>
            </div>
        </section>
    );
}