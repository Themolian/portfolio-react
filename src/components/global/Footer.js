import * as React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-content">
                    <p>Jamie Curran {currentYear}</p>
                    <Link to="/projects">Portfolio</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer