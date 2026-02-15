import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import a2z from "../assets/images/a2z.png";
import Hero from "../assets/Screenshots/Hero.png";
import food from "../assets/images/food.png";
import kcrental from "../assets/images/tarkashi.png";
import mightvayu from "../assets/images/mightvayu.png";
import universalrepair from "../assets/images/universal.png";

const projects = [
    {
        title: "A2Z Mechanical Service",
        description:
            "A fully responsive and interactive machine repairing service website built using ReactJS.",
        image: a2z,
        tech: ["React", "TailwindCSS"],
        link: "https://a2zmechanicalservice.com",
        code: "https://github.com/shubhamsainiiii/a2z-service",
    },
    {
        title: "DishKart – Food Delivery App",
        description:
            "A full-stack MERN food delivery application with authentication, cart, and order system.",
        image: food,
        tech: ["Reactjs", "Nodejs", "MongoDB"],
        link: "https://github.com/shubhamsainiiii/Food-Delivery-App",
        code: "https://github.com/shubhamsainiiii/Food-Delivery-App",
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio built with ReactJS showcasing projects, skills, and experience.",
        image: Hero,
        tech: ["React", "TailwindCSS"],
        link: "https://www.shubhaminnovates.cloud",
        code: "https://github.com/shubhamsainiiii/Portfolio",
    },
    {
        title: "Taarkashi Jewellers",
        description:
            "A modern jewelry manufacturing and retail platform offering a wide range of handcrafted and elegant jewelry collections. Designed with a clean, user-friendly interface, the website delivers a smooth browsing experience while beautifully showcasing products with clarity, style, and luxury appeal.",
        image: kcrental,
        tech: ["React", "NodeJs", "ExpressJs", "MongoDB"],
        link: "https://tarkashi-jewellers-frontend.vercel.app/",
        code: "https://github.com/shubhamsainiiii/KCRENTAL_BACKEND_CODE",
    },
    {
        title: "MightVayu Technical Services",
        description:
            "MightVayu Technical Services delivers innovative design, fabrication, and build solutions across exhibitions, events, and technical installations. We create high-quality temporary and permanent indoor and outdoor structures with a focus on safety, precision, and cost efficiency.",
        image: mightvayu,
        tech: ["React", "TailwindCSS", "Framer Motion"],
        link: "https://www.mtsexb.com/",
        code: "https://github.com/shubhamsainiiii/MIGHTYVAYU",
    },
    {
        title: "Universal Repair Point",
        description:
            "Universal Repair Point is a professional repair service website providing reliable solutions for home appliances and electronic repairs with a clean, responsive, and user-friendly interface.",
        image: universalrepair,
        tech: ["React", "TailwindCSS", "Framer Motion"],
        link: https://www.universalrepairpoint.com",
        code: "https://github.com/shubhamsainiiii/repairing_website",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#f5f9ff]">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 font-primary">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-4xl md:text-5xl font-bold text-[#1055C9]">
                        My Projects
                    </h3>
                    <p className="text-gray-600 text-lg mt-2">
                        Discover my projects, where creativity meets innovation
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-stretch">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden shadow-gray-400 flex flex-col h-full"
                        >
                            {/* Image */}
                            <LazyLoadImage
                                src={project.image}
                                alt={project.title}
                                effect="blur"
                                className="w-full h-56 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">
                                    {project.title}
                                </h4>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6 items-start">
                                    {project.tech.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-md bg-[#eef3ff] text-[#22577a] text-sm font-medium"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-2 rounded-lg border border-[#22577a] text-[#22577a] font-semibold hover:bg-[#eef3ff] transition-all duration-500"
                                    >
                                        Code
                                    </a>

                                    <a
                                        href={project.link || "#"}
                                        onClick={(e) => !project.link && e.preventDefault()}
                                        className={`flex-1 text-center py-2 rounded-lg font-semibold transition-all duration-500 ${project.link
                                            ? "bg-[#1055C9] text-white hover:bg-blue-500"
                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            }`}
                                    >
                                        Live View
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Projects;
