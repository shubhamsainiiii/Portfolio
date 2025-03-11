import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMenuClick = (section) => {
        setIsOpen(false);
        const targetSection = document.getElementById(section.toLowerCase());
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#22577a] text-white shadow-lg" : "bg-white text-[#22577a] shadow-lg "}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold" onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick("home");
                }}>SHUBHAM</a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-semibold">
                    {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
                        <li key={item} className="transition-transform duration-300 hover:scale-110">
                            <a href={`#${item.toLowerCase()}`} onClick={(e) => {
                                e.preventDefault();
                                handleMenuClick(item);
                            }}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className={`md:hidden flex flex-col items-center font-bold bg-[#22577a] w-1/2 max-w-sm mx-auto py-4 absolute top-16 right-1/4 transform translate-x-1/2 shadow-xl shadow-gray-500-lg ${isScrolled ? "bg-[#22577a] text-white shadow-lg" : "bg-white text-[#22577a]"}`}>
                    {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
                        <li key={item} className={`py-2 w-full text-center ${isScrolled ? "active:bg-white active:text-[#22577a]" : "active:bg-[#22577a] active:text-white"}`} >
                            <a href={`#${item.toLowerCase()}`} onClick={(e) => {
                                e.preventDefault();
                                handleMenuClick(item);
                            }}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
};

export default Navbar;
