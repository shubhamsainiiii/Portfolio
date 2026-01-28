import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Heroimg from "../assets/images/Heroimg.JPG";
import projectImg from "../assets/images/a2z.png";
import shubhamCV from "../assets/resume/Shubham_s_Resume.pdf";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router";
// import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="bg-[#f5f9ff]">
            <section id="home"
                className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-32 font-primary"
            >
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-500 via-purple-400 to-blue-700 p-1">
                        {/* Border container */}
                        <div className="w-full h-full rounded-full bg-white overflow-hidden">
                            {/* Image zooms inside */}
                            <motion.div
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full h-full"
                            >
                                <LazyLoadImage
                                    src={Heroimg}
                                    alt="Shubham"
                                    effect="blur"
                                    className="w-full h-full object-cover rounded-full cursor-pointer"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="max-w-xl text-center md:text-left mt-10 md:mt-0"
                >
                    <h4 className="text-lg font-semibold text-gray-700">Hi, I’m</h4>

                    <h1 className="text-4xl md:text-5xl font-bold mt-1">
                        <span className="bg-gradient-to-tr from-blue-500 via-purple-400 to-blue-700 bg-clip-text text-transparent">
                            Shubham Saini
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-3">
                        <TypeAnimation
                            sequence={[
                                "MERN Stack Developer...!",
                                1500,
                                "Continuous Learner...!",
                                1500,
                                "Building Scalable Solutions...!",
                                1500,
                                "Bridging Front & Back-End...!",
                                1500
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>

                    <p className="mt-5 text-gray-600">
                        Passionate MERN Stack Developer focused on building modern,
                        scalable and performance-driven web applications.
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href={shubhamCV}
                            className="bg-[#1055C9] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-500 transition-all duration-500 text-center"
                        >
                            Download CV
                        </a>
                        <Link
                            to="/contact"
                            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-[#1055C9] hover:text-white transition-all duration-500 text-center"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="flex gap-5 mt-7 justify-center md:justify-start text-xl text-gray-600">
                        <motion.a
                            href="mailto:shubhamsainiiii27@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaEnvelope />
                        </motion.a>
                        <motion.a
                            href="tel:7691888950"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaPhone />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/shubhamsaini27/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaLinkedin />
                        </motion.a>

                        <motion.a
                            href="https://github.com/shubhamsainiiii"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaGithub />
                        </motion.a>

                        <motion.a
                            href="https://instagram.com/shubhamsainiiiiii"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaInstagram />
                        </motion.a>
                        <motion.a
                            href="https://wa.me/7691888950"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaWhatsapp />
                        </motion.a>
                    </div>


                </motion.div>
            </section>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="py-20 px-6 text-center"
            >
                <h2 className="text-4xl font-bold text-[#1055C9] mb-6">
                    About Me
                </h2>

                <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
                    I’m <b>Shubham Saini</b>, a passionate <b className="text-[#1055C9]">MERN Stack Developer</b> with
                    hands-on experience in building modern, scalable, and user-friendly
                    web applications. My expertise includes frontend technologies like
                    <b > React, Tailwind CSS, and Framer Motion</b>, along with backend
                    development using <b>Node.js, Express.js, MongoDB, and REST APIs</b>.
                    <br /><br />
                    I focus on writing clean, optimized code, building responsive UIs,
                    and delivering smooth user experiences. Currently, I’m strengthening
                    my <b>Data Structures & Algorithms</b> skills to become a better
                    problem solver and software engineer.
                </p>

                <div className="mt-10">
                    <Link
                        to="/about"
                        className="bg-[#1055C9] hover:bg-blue-500 inline-block text-white px-8 py-3 rounded-md font-semibold transition-all duration-500"
                    >
                        Explore More About Me
                    </Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="py-20 px-6"
            >
                <h2 className="text-4xl font-bold text-center text-[#1055C9] mb-4">
                    Featured Projects
                </h2>

                <p className="text-gray-600 text-center mb-12">
                    A glimpse of my recent work and hands-on projects.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
                >
                    <img
                        src={projectImg}
                        alt="Project"
                        className="md:w-1/2 h-64 object-cover"
                    />

                    <div className="p-6 md:w-1/2">
                        <h3 className="text-2xl font-bold text-[#1055C9] mb-3">
                            a2z mechanical Service
                        </h3>

                        <p className="text-gray-600 mb-4">
                            A full-featured MERN stack food delivery application with
                            authentication, cart management, orders, and admin panel.
                        </p>

                        <div className="flex gap-3 mb-6 flex-wrap">
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                                React
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                                TailwindCSS
                            </span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                                Framer-Motion
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/shubhamsainiiii/a2z-service" target="_blank"
                                rel="noopener noreferrer" className="border border-blue-600 px-5 py-2 rounded-md font-semibold text-blue-600 hover:bg-[#1055C9] hover:text-white transition-all duration-300">
                                Code
                            </a>
                            <a href="https://a2zmechanicalservice.com" target="_blank"
                                rel="noopener noreferrer" className=" px-5 py-2 rounded-md font-semibold text-white bg-[#1055C9] hover:bg-blue-500 transition-all duration-300">
                                Live View
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="text-center mt-14"
                >
                    <Link
                        to="/projects"
                        className="bg-[#1055C9] hover:bg-blue-500 text-white px-8 py-3 rounded-md font-semibold transition-all duration-500"
                    >
                        Explore My Projects
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
