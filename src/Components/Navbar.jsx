import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="container">
            <div class="navbar">
                <ul>
                    <li><Link to="/home" className="homeLink">Home</Link></li>
                    <li><Link to="/student" className="studentLink">Student</Link></li>
                    <li><Link to="/contact" className="contactLink">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;