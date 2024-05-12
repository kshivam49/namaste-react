import logo from '../../asset/Logo.png';

const Header = () => (
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
            </ul>

        </div>
    </div>
);

export default Header;