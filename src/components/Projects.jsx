import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaDesktop } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";

const projects = [
    {
        title: "Project 1",
        description: "Description",
        icon: <GiNinjaHeroicStance className="text-4xl text-white" />,
        link: "#",
    },
    {
        title: "Project 2",
        description: "Description",
        icon: <FaUtensils className="text-4xl text-white" />,
        link: "#",
    },
    {
        title: "Project 3",
        description: "Description",
        icon: <FaDesktop className="text-4xl text-white" />,
        link: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 mt-30 font-primary">
            <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.6 }}
                viewport={{ once: false }}
                className="text-center"
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                    <h3 className="text-4xl font-bold text-[#22577a]">MY PROJECTS</h3>
                    <p className="text-gray-900 font-semibold text-lg mt-2">
                        Discover my projects, where creativity meets innovation
                    </p>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="border border-[#001524] p-6 rounded-lg shadow-sm shadow-[#001524] text-center transition-colors duration-200"
                            >
                                <div className="w-16 h-16 mx-auto bg-[#22577a] flex items-center justify-center rounded-full mb-4">
                                    {project.icon}
                                </div>
                                <h4 className="text-xl text-gray-900 font-semibold mb-2">{project.title}</h4>
                                <p className="text-gray-900 text-lg font-medium mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View details of ${project.title}`}
                                    className="text-[#22577a] font-bold transition duration-200 hover:text-[#08306b]"
                                >
                                    Click Here
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section >
    );
};

export default Projects;
