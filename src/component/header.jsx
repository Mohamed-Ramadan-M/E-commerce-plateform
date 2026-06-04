import { useState, useEffect } from 'react';
const Header = () => {
    const [leftPosition, setLeftPosition] = useState("3px");
    useEffect(() => {

        const interval = setInterval(() => {
            setLeftPosition((prev) => (prev === "3px" ? "-300px" : "3px"));
        }, 1500);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <nav className="container navbar navbar-expand d-flex justify-content-between">
                <div className="nav-item textbrand">
                    <span className="brand-name" style={{
                        position: 'relative',
                        left: leftPosition,
                        transition: 'left 0.3s ease'
                    }} > Buy Your Comfort </span>
                </div>
                <div className="nav-links">
                    <a href="#" className="navbar-brand my-0 pe-3">
                        <img
                            className="brand-logo"
                            src="./src/assets/images/zahy1-removebg-preview.png"
                            alt="Brand Logo"
                        /></a>
                </div>
                <div className="icon">
                    <img className="avatar" src="./src/assets/images/image-avatar.png" alt="avatar" />
                    <button className="btn btn-outline-primary rounded-pill dynapuff" href="#">
                        SIGN IN
                    </button>
                    <button className="btn btn-outline-primary rounded-pill dynapuff" href="#">
                        SIGN UP
                    </button>
                </div>
            </nav>

            <div className="sub-nav" id="s-n">
                <div className="nav-links">
                    <a href="#" className="navbar-brand my-0 pe-3">
                        <img
                            className="brand-logo sub-n"
                            src="../src/assets/images/zahy1-removebg-preview.png"
                            alt="Brand Logo"
                        /></a>
                </div>
            </div>
        </div>
    );
}

export default Header;