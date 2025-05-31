import React from "react";
import { motion } from "framer-motion";
const About = () => {
    return (
        <section id="about" className="py-16 mt-24 font-primary">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">

                    {/* About Content */}
                    <div className="md:w-2/3">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: false }}
                            className=""
                        >
                            <h4 className="text-4xl font-bold text-[#22577a] mb-4 lg:text-left ">About Me</h4>
                            <ul className="text-gray-900 font-semibold mt-4 lg:space-y-4 text-lg text-justify">
                                <li>I am a Full-Stack Developer specializing in the <b className="text-[#22577a]">MERN Stack</b>, passionate about building scalable web applications.
                                </li>
                                <li>With a deep understanding of <b className="text-[#22577a]">Data Structures & Algorithms (DSA) using C++</b>, I focus on writing efficient, clean, and optimized code.</li>
                                <li>I have a strong belief in constantly learning and staying adaptable in the ever-evolving world of web development. I am actively looking for opportunities to expand my knowledge and skills.
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Skills Section */}
                    <div className="md:w-1/3 w-full">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: false }}
                            className=""
                        >
                            <h4 className="text-4xl font-bold text-[#22577a] mb-4">Skills</h4>
                            <ul className="space-y-2 text-[#001524] font-semibold ">
                                <li className="border-b border-gray-400 pb-2">Git, Github, Linux</li>
                                <li className="border-b border-gray-400 pb-2">C, C++, DSA</li>
                                <li className="border-b border-gray-400 pb-2">HTML, CSS, JavaScript</li>
                                <li className="border-b border-gray-400 pb-2">Tailwind CSS, ReactJS</li>
                                <li className="border-b border-gray-400 pb-2">ExpressJS, NodeJS</li>
                                <li className="border-b border-gray-400 pb-2">MongoDB, NoSQL</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;

