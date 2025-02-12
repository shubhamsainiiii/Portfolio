import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaDesktop } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";

const projects = [
    {
        title: "Netflix Clone",
        description: "I've created a responsive Netflix clone using HTML CSS.",
        icon: <GiNinjaHeroicStance className="text-4xl text-white" />,
        link: "#",
    },
    {
        title: "Project:2",
        description: "Description",
        icon: <FaUtensils className="text-4xl text-white" />,
        link: "#",
    },
    {
        title: "Portfolio Website",
        description: "I've created a portfolio website using HTML, CSS, and JavaScript to introduce myself.",
        icon: <FaDesktop className="text-4xl text-white" />,
        link: "#",
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 mt-30">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">

                <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: false }}
                    className="text-center"
                >
                    <h3 className="text-4xl font-bold text-teal-600">MY PROJECTS</h3>
                    <p className="text-[#011627] font-medium mt-2">
                        Discover my projects, where creativity meets innovation
                    </p>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.6, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: false }}
                            whileHover={{ scale: 1.07 }}

                            className="border-1 border-[#001524] p-6 rounded-lg shadow-sm shadow-[#001524] text-center hover:bg-[#c7f9cc] transition-transform duration-200"
                        >
                            <div className="w-16 h-16 mx-auto bg-[#001524] flex items-center justify-center rounded-full mb-4">
                                {project.icon}
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                            <p className="text-[#283d3b] font-normal mb-4">{project.description}</p>
                            <a href={project.link} className="text-[#0d3b66] font-bold hover:underline">Click Here</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
