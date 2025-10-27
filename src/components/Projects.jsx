// // import React from "react";
// import { motion } from "framer-motion";
// import { FaUtensils, FaDesktop, FaTools } from "react-icons/fa";

// const projects = [
//     {
//         title: "a2z Mechanical Service",
//         description: "A fully responsive and interactive machine repairing service website built using ReactJS",
//         icon: <FaTools className="text-4xl text-white" />,
//         link: "https://a2zmechanicalservice.com",
//     },
//     {
//         title: "Project 2",
//         description: "Description",
//         icon: <FaUtensils className="text-4xl text-white" />,
//         link: "#",
//     },
//     {
//         title: "Project 3",
//         description: "Description",
//         icon: <FaDesktop className="text-4xl text-white" />,
//         link: "#",
//     },
// ];

// const Projects = () => {
//     return (
//         <section id="projects" className="py-16 mt-30 font-primary">
//             <motion.div
//                 initial={{ scale: 0.7, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1.6 }}
//                 viewport={{ once: false }}
//                 className="text-center"
//             >
//                 <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
//                     <h3 className="text-4xl font-bold text-[#22577a]">MY PROJECTS</h3>
//                     <p className="text-gray-900 font-semibold text-lg mt-2">
//                         Discover my projects, where creativity meets innovation
//                     </p>

//                     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                         {projects.map((project, index) => (
//                             <div
//                                 key={index}
//                                 className="border border-[#001524] p-6 rounded-lg shadow-sm shadow-[#001524] text-center transition-colors duration-200"
//                             >
//                                 <div className="w-16 h-16 mx-auto bg-[#22577a] flex items-center justify-center rounded-full mb-4">
//                                     {project.icon}
//                                 </div>
//                                 <h4 className="text-xl text-gray-900 font-semibold mb-2">{project.title}</h4>
//                                 <p className="text-gray-900 text-lg font-medium mb-4 ">{project.description}</p>
//                                 <a
//                                     href={project.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     aria-label={`View details of ${project.title}`}
//                                     className="text-[#22577a] font-bold transition duration-200 hover:text-[#08306b]"
//                                 >
//                                     Click Here
//                                 </a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </motion.div>
//         </section >
//     );
// };

// export default Projects;

import { motion } from "framer-motion";
import { FaUtensils, FaDesktop, FaTools } from "react-icons/fa";
import a2z from '../assets/images/a2z.png';
import Hero from '../assets/Screenshots/Hero.png'
import food from '../assets/images/food.png'
const projects = [
    {
        title: "A2Z Mechanical Service",
        description: "A fully responsive and interactive machine repairing service website built using ReactJS",
        icon: <FaTools className="text-4xl text-white" />,
        link: "https://a2zmechanicalservice.com",
        code: "https://github.com/shubhamsainiiii/a2z-service",
        image: a2z
    },
    {
        title: "DishKart - A Food Delivery Application",
        description: "A full-stack MERN app for booking doctor appointments online with secure authentication.",
        icon: <FaUtensils className="text-4xl text-white" />,
        link: "https://dishkart.com",
        code: "https://github.com/shubhamsainiiii/Food-Delivery-App/tree/main/Food_Delivery_Application/Food_Delivery_Application_System",
        image: food
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with ReactJS showcasing projects and skills.",
        icon: <FaDesktop className="text-4xl text-white" />,
        link: "https://shubhaminnovates.netlify.app/",
        code: "https://github.com/shubhamsainiiii/Portfolio",
        image: Hero
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
                                className="relative border border-[#001524] p-1 rounded-lg shadow-sm shadow-gray-400 hover:shadow-md text-center transition-all duration-300 hover:-translate-y-2"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-contain rounded-t-lg mb-4"
                                />
                                <div className="w-full h-[1px] bg-[#22577a] my-4 rounded-full"></div>
                                <div className="w-16 h-16 mx-auto bg-[#22577a] flex items-center justify-center rounded-full mb-4">
                                    {project.icon}
                                </div>
                                <h4 className="text-xl text-gray-900 font-semibold mb-2">{project.title}</h4>
                                <p className="text-gray-900 text-lg font-medium mb-4 text-justify p-2">{project.description}</p>
                                <div className="flex justify-center gap-6 pb-4 relative">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View details of ${project.title}`}
                                        className="relative z-10 text-[#22577a] font-bold transition-all duration-200 hover:text-[#08306b]"
                                    >
                                        Click Here
                                    </a>
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative z-10 text-[#22577a] font-bold transition-all duration-200 hover:text-[#08306b]"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
