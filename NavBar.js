import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; // Import Link from React Router
import './NavBar.css';

function Navbar() {
     // State to handle mobile menu toggle and dropdown
     const [isOpen, setIsOpen] = useState(false);
     const [dropdown, setDropdown] = useState(false);
     const [dropdownHover, setDropdownHover] = useState(false);
 
     // Function to toggle the mobile menu
     const toggleMenu = () => setIsOpen(!isOpen);
 
     // Open the dropdown
     const openDropdown = () => {
         setDropdown(true);
     };
 
     // Close Dropdown with a delay
     const closeDropdown = () => {
         setTimeout(() => {
             if (!dropdownHover) {
                 setDropdown(false);
             }
         }, 100); // Delay in milliseconds
     };
 
     // Handle mouse entering and leaving the dropdown menu
     const handleDropdownHover = (status) => {
         setDropdownHover(status);
     };

    return (
        <>
            <nav className="navbar">
                {/* Logo or Brand Name */}
                <Link to="/ehl1.png" className="navbar-logo">
                     <img src="/ehl11.png" alt="EduPreneurs Hub Logo" />
                </Link>

                <div className="mobile-menu" onClick={toggleMenu}>
                    {/* Burger icon (for example, three horizontal lines) */}
                    <div className="burger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <li className="nav-item">
                    <Link to="/home" className="nav-links">Home</Link>
                </li>
                    {/* Dropdown for Modules */}
                    <li className="nav-item" onMouseEnter={openDropdown} onMouseLeave={closeDropdown} onMouseOver={() => handleDropdownHover(true)}
                        onMouseOut={() => handleDropdownHover(false)}>
                      <Link to="#" className="nav-links">Modules</Link>
                     {dropdown && (
                           <div className="dropdown-content">
                            <Link to="/module1" className="dropdown-item">Module 1: Foundations of Entrepreneurship</Link>
                            <Link to="/module2" className="dropdown-item">Module 2: Developing Business Strategies</Link>
                            <Link to="/module3" className="dropdown-item">Module 3: Building the Business Plan</Link>
                            <Link to="/module4" className="dropdown-item">Module 4: Advanced Business Concepts</Link>
                            <Link to="/module5" className="dropdown-item">Module 5: Digital Entrepreneurship and Innovation</Link>
                            <Link to="/module6" className="dropdown-item">Module 6: Ethics, Social Responsibility, and Future Trends</Link>
                            <Link to="/extracontent" className="dropdown-item">Extra Content</Link>
                            </div>
                        )}
                        </li>
                        {/* Close button */}
                         <div className="nav-menu-close" onClick={toggleMenu}>X</div>

                        <li className="nav-item">
                            <Link to="/contact" className="nav-links">Contact</Link>
                        </li>
                        {isOpen && (
                            <button className="btn-login-signup mobile-only">Login/Signup</button>
                         )}
                </ul>

                {/* Optional: Login/Signup Button */}
                <button className="btn-login-signup desktop-only">Login/Signup</button>
            </nav>
        </>
    );
}

export default Navbar;

