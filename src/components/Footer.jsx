import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#22577a] text-[#fff] text-center py-8 mt-10">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
            >
                <div className="container mx-auto flex flex-col items-center space-y-2">
                    <h2 className="text-2xl font-bold">Connect with Me</h2>

                    {/* Address and Phone */}
                    <div className="text-center space-y-1">
                        <p className="flex items-center justify-center">
                            <FaMapMarkerAlt className="mr-2" /> Jaipur, Rajasthan, India
                        </p>
                        <p className="flex items-center justify-center">
                            <FaPhoneAlt className="mr-4" /> +91-7691888950
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <a href="mailto:shubhamthoi27@gmail.com" className="text-white text-xl hover:scale-110 transition duration-400">
                            <FaEnvelope />
                        </a>
                        <a href="https://www.linkedin.com/in/shubham-saini-326727220" className="text-white text-xl hover:scale-110 transition duration-400">
                            <FaLinkedin />
                        </a>
                        <a href="https://wa.me/7691888950" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:scale-110 transition duration-400">
                            <FaWhatsapp />
                        </a>
                        <a href="https://instagram.com/shubhamsainiiiiii" className="text-white text-xl hover:scale-110 transition duration-400">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/shubhamsainiiii" className="text-white text-xl hover:scale-110 transition duration-400">
                            <FaGithub />
                        </a>
                    </div>

                    
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
