import "../css/Footer.css";
import visa from "../img/footer/visa.png";
import unionpay from "../img/footer/unionpay.png";
import paypal from "../img/footer/paypal.png";
import mastercard from "../img/footer/mastercard-credit-card.png";
import masterlogo from "../img/footer/mastercard-logo.png";

export default function Footer(){
    return(
        <footer>
            <div className="wrapper">
                <div className="grid">
                    <div className="col">
                        <h3>ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        <ul>
                            <li><a href="#"><i className="fa-solid fa-location-dot"></i> Chennai, Tamil Nadu</a></li>
                            <li><a href="#"><i className="fa-solid fa-phone"></i>+91-1234567890</a></li>
                            <li><a href="#"><i className="fa-solid fa-envelope"></i> electronite@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>CATEGORIES</h3>
                        <ul>
                            <li><a href="#">Laptops</a></li>
                            <li><a href="#">Smartphones</a></li>
                            <li><a href="#">Cameras</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>INFORMATION</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Orders and Returns</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>SERVICE</h3>
                        <ul>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">View Cart</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Track My Order</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div className="payment">
                    <ul>
                        <li><a href="#"><img src={visa}></img></a></li>
                        <li><a href="#"><img src={masterlogo}></img></a></li>
                        <li><a href="#"><img src={paypal}></img></a></li>
                        <li><a href="#"><img src={unionpay}></img></a></li>
                        <li><a href="#"><img src={mastercard}></img></a></li>
                    </ul>
                    <p>Selva Kumar R.</p>
                </div>
            </div>
        </footer>
    );
}