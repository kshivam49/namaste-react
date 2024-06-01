import { useState } from 'react';
import logo from '../../asset/Logo.png';

const Header = () => {
    const [btnName, setBtnNAme] = useState("Login")

    function changeBtn() {
        if (btnName === "Login") {
            setBtnNAme("Logout");
        } else {
            setBtnNAme("Login");
        }
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="QuickBite" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login' onClick={changeBtn} >{btnName}</button>
                </ul>

            </div>
        </div>
    );
};

export default Header;