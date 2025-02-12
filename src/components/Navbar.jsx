import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 bg-white shadow-md z-50 ">
            <nav className="container mx-auto px-6 py-4 flex  justify-between items-center">
                <a href="/" className="text-2xl font-bold text-[#22577a]" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "center" });
                }}>SHUBHAM</a>


                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-[#22577a]  font-semibold">
                    {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
                        <li key={item} className="transition-transform duration-300 hover:scale-110">
                            <a href={`#${item.toLowerCase()}`} onClick={(e) => {
                                e.preventDefault();
                                const targetSection = document.getElementById(item.toLowerCase());
                                if (targetSection) {
                                    targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
                                }
                            }}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <FaTimes size={24} className="text-[#22577a]" /> : <FaBars size={24} className="text-[#22577a]" />}
                </button>

            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center text-[#001524] text-[16px] font-bold bg-gray-200 w-full py-4 absolute top-16 left-0 shadow-lg">
                    {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
                        <li key={item} className="py-2">
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
};

export default Navbar;
