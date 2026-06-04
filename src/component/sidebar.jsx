import { useState } from 'react';
const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <a  className="nav-link rounded-end-5" onClick = {toggleSidebar} style={{left: isActive ? '300px' : '0'}}>
                <img src="../src/assets/images/double-arrows.png" />
            </a>

            <div className="sidebar" style={{left: isActive ? '0' : '-300px'}} >
                <div className="nav-links">
                    <a href="#" className="navbar-brand my-0 pe-3">
                        <img
                            className="sidebar-logo"
                            src="../src/assets/images/zahy1-removebg-preview.png"
                            alt="Brand Logo"
                        />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">MEN</a>
                    </li>
                    <li>
                        <a href="#">KIDS</a>
                    </li>
                    <li>
                        <a href="#">SALE</a>
                    </li>
                    <li>
                        <a href="#">CONTACT US</a>
                    </li>
                </ul>
                <div className="social">
                    <h2>Follow Us On:</h2>
                    <div className="control">
                        <a href="https://www.instagram.com/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
