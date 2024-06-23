import { useState } from 'react';
import logo from '../../asset/Logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnName, setBtnNAme] = useState("Login")

    const onlineStatus = useOnlineStatus();

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
                    <li>
                        Online status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li><Link style={{ textDecoration: "none", color: "black" }} to={"/"}>Home</Link></li>
                    <li>
                        <Link style={{ textDecoration: "none", color: "black" }} to={"/about"}>About Us</Link></li>
                    <li><Link style={{ textDecoration: "none", color: "black" }} to={"/contact"}>Contact Us</Link></li>
                    <li><Link style={{ textDecoration: "none", color: "black" }} to={"/grocery"}>Grocery</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={changeBtn} >{btnName}</button>
                </ul>

            </div>
        </div>
    );
};

export default Header;