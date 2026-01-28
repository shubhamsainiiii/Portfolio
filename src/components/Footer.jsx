import { FaLinkedinIn, FaGithub, FaInstagram, FaArrowUp, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-[#f5f9ff] border-t border-gray-200 pt-16 relative overflow-hidden">

            {/* TOP CONTENT */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-400 to-blue-700 bg-clip-text text-transparent">
                        {"<"}Shubham Saini{" />"}
                    </h2>

                    <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                        MERN Stack Developer passionate about creating modern web
                        applications with clean design and seamless user experiences.
                    </p>
                </motion.div>

                {/* RIGHT SOCIAL LINKS */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>

                    <div className="flex gap-4 flex-wrap">
                        <SocialIcon
                            bg="from-blue-400 to-blue-600"
                            icon={<FaLinkedinIn />}
                            link="https://www.linkedin.com/in/shubhamsaini27/"
                        />
                        <SocialIcon
                            bg="from-gray-400 to-gray-600"
                            icon={<FaGithub />}
                            link="https://github.com/shubhamsainiiii"
                        />
                        <SocialIcon
                            bg="from-green-400 to-green-600"
                            icon={<FaWhatsapp />}
                            link="https://wa.me/7691888950"
                        />
                        <SocialIcon
                            bg="from-blue-500 to-blue-700"
                            icon={<FaPhoneAlt />}
                            link="tel:7691888950"
                        />
                        <SocialIcon
                            bg="from-pink-400 to-pink-600"
                            icon={<FaInstagram />}
                            link="https://instagram.com/shubhamsainiiiiii"
                        />
                    </div>
                </motion.div>
            </div>

            {/* BOTTOM COPYRIGHT */}
            <div className="mt-14 border-t border-gray-200 py-6 text-center text-gray-600 text-sm md:text-base">
                &copy; {new Date().getFullYear()} shubhaminnovates — All rights reserved.
            </div>

            {/* SCROLL TO TOP */}
            <motion.button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} whileHover={{ scale: 1.1 }} className="fixed bottom-6 right-6 bg-[#1055C9] hover:bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-500 animate-bounce" > <FaArrowUp className="text-lg md:text-xl" /> </motion.button>
            <motion.button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} whileHover={{ scale: 1.1 }} className="fixed bottom-6 left-6 bg-green-400 hover:bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-500 animate-bounce" > <FaWhatsapp className="text-lg md:text-3xl" /> </motion.button>
        </footer>
    );
};

const SocialIcon = ({ icon, bg, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <motion.div
                whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
                className={`bg-gradient-to-tr ${bg} w-12 h-12 rounded-full flex items-center justify-center text-xl text-white cursor-pointer transition-transform`}
            >
                {icon}
            </motion.div>
        </a>
    );
};

export default Footer;
