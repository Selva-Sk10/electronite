import "../css/Navbar.css";
import {Link, NavLink} from "react-router-dom";
import { useState } from "react";

export default function Navbar(props){
    const {count} = props
    const [menu, setMenu] = useState(false);

    let showCount = true;
    if(count === 0){
        showCount = false;
    }

    function showMenu(e){
        if(!e.target.matches("ul")){
            setMenu(!menu);
        }
    }

    return(
        <nav>
            <div className="wrapper">
                <div className="flex">
                    <div className="logo">
                        <Link to="/electronite"><h1>Electronite<span>.</span></h1></Link>
                    </div>
                    <div className="icons">
                        <div className="cart-icon">
                            <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                            {showCount && <Link to="/cart" className="count">{count}</Link>}
                        </div>
                        <div className={menu ? "hamburger active" : "hamburger"} onClick={showMenu}>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <ul className={menu ? "mobile active" : "mobile"} onClick={showMenu}>
                        <li><NavLink to="/electronite">Home</NavLink></li>
                        <li><NavLink to="/laptops">Laptops</NavLink></li>
                        <li><NavLink to="/smartphones">Smartphones</NavLink></li>
                        <li><NavLink to="/cameras">Cameras</NavLink></li>
                    </ul>
                    <ul className="desktop">
                        <li><NavLink to="/electronite">Home</NavLink></li>
                        <li><NavLink to="/laptops">Laptops</NavLink></li>
                        <li><NavLink to="/smartphones">Smartphones</NavLink></li>
                        <li><NavLink to="/cameras">Cameras</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}