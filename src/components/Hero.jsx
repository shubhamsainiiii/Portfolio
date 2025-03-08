import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope, FaPhoneAlt, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import shubham_photo from "../assets/images/shubham_photo.jpg";
import Resume from "../assets/resume/Resume.pdf";
const Hero = () => {
    return (
        <section id="home" className="flex flex-col md:flex-row items-center justify-around px-6 py-12 mt-32 md:py-24">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#001524]">
                <img
                    src={shubham_photo}
                    alt="Profile"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="mt-8 md:mt-0 max-w-xl md:w-sm lg:w-lg  sm:ml-10 text-center md:text-left">
                <h3 className="text-lg font-bold text-[#001524]">Hi, My Name is</h3>
                <h1 className="text-4xl md:text-5xl font-bold text-teal-600">Shubham</h1>
                <span id="element" className="text-lg text-teal-600 font-semibold"></span>
                <p className="text-justify text-[#001524] font-semibold mt-4">
                    Welcome to my portfolio website! I'm a passionate and aspiring web developer with a strong desire to create innovative solutions and push the boundaries of technology.</p>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-6 space-y-3 sm:space-y-0 sm:space-x-4">
                    <a href={Resume} className="bg-teal-600 font-semibold text-[15px] text-white px-6 py-2 rounded-md hover:bg-teal-700 transition duration-300">
                        Download CV
                    </a>
                    <a href="mailto:shubhamthoi27@gmail.com" className="bg-gray-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-900 font-semibold text-[15px] transition duration-300">
                        Contact
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start mt-6 space-x-4">
                    <a href="mailto:shubhamthoi27@gmail.com" className="text-gray-800 text-2xl hover:scale-110 transition duration-400">
                        <FaEnvelope />
                    </a>
                    <a href="tel:7691888950" className="text-gray-800 text-2xl hover:scale-110 transition duration-400">
                        <FaPhoneAlt />
                    </a>
                    <a href="https://www.linkedin.com/in/shubham-saini-326727220" className="text-gray-800 text-2xl hover:scale-110 transition duration-400">
                        <FaLinkedin />
                    </a>
                    <a href="https://wa.me/qr/MPUK7LMAZQQHI1" className="text-gray-800 text-2xl hover:scale-110 transition duration-400">
                        <FaWhatsapp />
                    </a>
                    <a href="https://instagram.com/shubhamsainiiiiii" className="text-gray-800 text-2xl hover:scale-110 transition duration-400">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/shubhamsainiiii" className="text-gray-800 text-2xl hover:scale-110 transition duration-400">
                        <FaGithub />
                    </a>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;

