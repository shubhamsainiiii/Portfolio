import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "services", path: "/services" },
        { name: "projects", path: "/projects" },
        { name: "contact", path: "/contact" },
    ];

    // 🔥 Handles SAME PAGE click + mobile close
    const handleNavClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* ================= HEADER ================= */}
            <header className="fixed top-0 w-full z-50 bg-white/0 backdrop-blur-md shadow">
                <nav className="flex justify-between items-center px-6 py-3">
                    {/* LOGO */}
                    <Link
                        to="/"
                        onClick={() => handleNavClick("/")}
                        className="cursor-pointer flex items-center"
                    >
                        <img
                            src={logo}
                            alt="Shubham Logo"
                            className="h-12 w-12 object-contain"
                        />
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex gap-6 font-semibold text-[#1055C9]">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <li key={item.name} className="relative group">
                                    <Link
                                        to={item.path}
                                        onClick={() => handleNavClick(item.path)}
                                        className={`cursor-pointer transition-colors duration-300 hover:text-[#1b4895] ${isActive ? "text-[#1055C9]" : ""
                                            }`}
                                    >
                                        {item.name.toUpperCase()}
                                    </Link>

                                    {/* UNDERLINE */}
                                    <span
                                        className={`absolute left-0 -bottom-1 h-[2px] bg-[#1055C9] transition-all duration-300 ${isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </li>
                            );
                        })}
                    </ul>

                    {/* HAMBURGER */}
                    <div className="md:hidden cursor-pointer">
                        <Hamburger
                            toggled={isOpen}
                            toggle={setIsOpen}
                            size={22}
                            duration={0.5}
                            easing="ease-in-out"
                            color="#1055C9"
                            rounded
                        />
                    </div>
                </nav>
            </header>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`fixed inset-0 z-40 md:hidden backdrop-blur-xl bg-white/40 transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <ul className="h-full flex flex-col justify-center items-center gap-8 text-2xl font-medium text-[#1055C9]">
                    {menuItems.map((item, i) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <li
                                key={item.name}
                                style={{ transitionDelay: `${i * 120}ms` }}
                                className={`transition-all duration-500 ease-out ${isOpen
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-16 opacity-0"
                                    }`}
                            >
                                <Link
                                    to={item.path}
                                    onClick={() => handleNavClick(item.path)}
                                    className={`tracking-wide cursor-pointer transition-all hover:scale-105 ${isActive
                                        ? "underline text-[#1055C9]"
                                        : ""
                                        }`}
                                >
                                    {item.name.toUpperCase()}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
