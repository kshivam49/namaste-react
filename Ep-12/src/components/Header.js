import { useContext, useState } from 'react';
import logo from '../../asset/logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName, setBtnNAme] = useState("Login")
    const data = useContext(UserContext);

    const onlineStatus = useOnlineStatus();

    function changeBtn() {
        if (btnName === "Login") {
            setBtnNAme("Logout");
        } else {
            setBtnNAme("Login");
        }
    }

    //Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);


    return (
        <div className="header flex justify-between lg:bg-pink-100 shadow-lg sm:bg-yellow-100 bg-green-100">
            <div className="logo-container mx-8">
                <img className="logo w-40" src={logo} alt="QuickBite" />
            </div>
            <div className="nav-items flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>
                        Online status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className='px-4'><Link style={{ textDecoration: "none", color: "black" }} to={"/"}>Home</Link></li>
                    <li className='px-4'>
                        <Link style={{ textDecoration: "none", color: "black" }} to={"/about"}>About Us</Link></li>
                    <li className='px-4'><Link style={{ textDecoration: "none", color: "black" }} to={"/contact"}>Contact Us</Link></li>
                    <li className='px-4'><Link style={{ textDecoration: "none", color: "black" }} to={"/grocery"}>Grocery</Link></li>
                    <li className='px-4 font-bold text-xl'>
                        <Link style={{ textDecoration: "none", color: "black" }} to={"/cart"}>
                            Cart ({cartItems.length} items)
                        </Link>
                    </li>
                    <button className='login px-4' onClick={changeBtn} >{btnName}</button>
                    <li className='px-4 font-bold'>{data.loggedInUser}</li>
                </ul>

            </div>
        </div>
    );
};

export default Header;