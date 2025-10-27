// import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaEnvelope, FaPhoneAlt, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import shubhamCV from "../assets/resume/ShubhamResume.pdf";
import shubhamCopy from '../assets/images/shubhamCopy.jpg'

const Hero = () => {
    return (
        <section id="home" className="flex flex-col md:flex-row items-center justify-around px-6 py-12 mt-32 md:py-20 font-primary">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gray-900">
                <img
                    src={shubhamCopy}
                    alt="Profile"
                    className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-700"
                />
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                className="mt-8 md:mt-0 max-w-xl md:w-sm lg:w-lg sm:ml-10 text-center text-xl md:text-left"
            >
                <h3 className="font-bold text-gray-900">Hi, My Name is</h3>

                <h1 className="text-4xl md:text-4xl font-bold text-[#22577a]">
                    <TypeAnimation
                        sequence={["Shubham and i am ", 1000,
                            "a Web Developer...!", 1000,
                            "a MERN Stack Enthusiast...!", 1000,
                            "a Problem Solver...!", 1000,]}
                        wrapper="span"
                        cursor={false}
                        repeat={Infinity}
                    />
                </h1>

                <p className="text-justify text-gray-900 font-semibold mt-4">
                    Welcome to my portfolio website! I am a passionate and aspiring web developer with a strong desire to create innovative solutions and push the boundaries of technology.
                </p>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-6 space-y-3 sm:space-y-0 sm:space-x-4">
                    <a href={shubhamCV} className="bg-[#22577a] font-semibold text-[18px] text-white px-6 py-2 rounded-md hover:bg-[#08306b] transition duration-300">
                        Download CV
                    </a>
                    <a href="mailto:shubhamthoi27@gmail.com" className="bg-gray-800 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-900 font-semibold text-[18px] transition duration-300">
                        Contact
                    </a>
                </div>


                <div className="flex justify-center md:justify-start mt-6 space-x-4">
                    <a href="mailto:shubhamsainiiii27@gmail.com" className="text-gray-800 text-2xl hover:scale-110    transition duration-400">
                        <FaEnvelope className="hover:text-gray-900" />
                    </a>
                    <a href="tel:7691888950" className="text-gray-800 text-2xl hover:scale-110 transition-all duration-500">
                        <FaPhoneAlt className="hover:text-gray-900" />
                    </a>
                    <a href="https://www.linkedin.com/in/shubhamsaini27/" className="text-gray-800 text-2xl hover:scale-110 transitio-alln duration5400">
                        <FaLinkedin className="hover:text-gray-900" />
                    </a>
                    <a href="https://wa.me/7691888950" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl hover:scale-110 transition-all duration-500">
                        <FaWhatsapp className="hover:text-gray-900" />
                    </a>
                    <a href="https://instagram.com/shubhamsainiiiiii" className="text-gray-800 text-2xl hover:scale-110 transition-all duration-500">
                        <FaInstagram className="hover:text-gray-900" />
                    </a>
                    <a href="https://github.com/shubhamsainiiii" className="text-gray-800 text-2xl hover:scale-110 transition-all duration-500">
                        <FaGithub className="hover:text-gray-900" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
