import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Homecare Connect
                </Link>
                <ul className="navbar-menu">
                    <li>
                        <Link to="/home" className="navbar-item">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/signin" className="navbar-item">
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="navbar-item">
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="navbar-item">
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;