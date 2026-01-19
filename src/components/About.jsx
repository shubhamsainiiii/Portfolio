import { motion } from "framer-motion";
import ProfileImg from "../assets/images/Heroimg.JPG";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGit,
    FaGithub,
    FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiExpress, SiMongodb, SiPostman, SiGrafana, SiPrometheus } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
const cardBase =
    "flex items-center gap-3 rounded-2xl bg-white shadow-sm border border-slate-200 px-5 py-3 min-w-[220px] \
    transition-all duration-300 ease-out \
    hover:-translate-y-1 hover:scale-[1.03] \
    hover:shadow-lg hover:border-blue-300";

const experiences = [
    {
        title: "Software Developer",
        company: "Dataabsolute Technologies Pvt. Ltd. Jaipur, Rajasthan",
        period: "September 2025 – Present",
        points: [
            "Working with monitoring and observability tools such as Grafana, Prometheus, and Loki to track system performance and application health.",
            "Setting up dashboards and alerts in Grafana using Prometheus metrics and Loki logs for proactive issue detection and troubleshooting.",

        ]
    },
    {
        title: "Full-Satck Developer Intern",
        company: "Regex Software Services, Jaipur, Rajasthan",
        period: "January 2025 – August 2025",
        points: [
            "Building modern, responsive, and scalable web applications using React, TailwindCSS, and JavaScript.",
            "Developing RESTful APIs and backend services using Node.js, Express.js, and MongoDB.",
            "Optimizing application performance, security, and accessibility across the full MERN stack."
        ]
    }
];

const About = () => {
    return (
        <section id="about" className="py-16 font-primary bg-[#f5f9ff]">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-bold text-center text-[#1055C9] mb-6 mt-4"
                >
                    About Me
                </motion.h2>

                <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="lg:w-7/12 text-gray-700 text-lg"
                    >
                        <p className="mb-4">
                            Hi, I’m{" "}
                            <b className="text-[#1055C9]">Shubham Saini</b>, a passionate
                            Full-Stack Developer specializing in <b>MERN Stack</b>. I build
                            modern, scalable, and user-friendly web applications and focus on{" "}
                            <b>Data Structures &amp; Algorithms (DSA)</b> with clean,
                            optimized code.
                        </p>
                        <p>
                            Continuous learning, collaboration, and adaptability define my
                            approach to web development, and I am actively looking for
                            opportunities to contribute and grow.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="lg:w-5/12 flex justify-center lg:justify-end"
                    >
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-blue-500 via-purple-400 to-blue-700 p-1 shadow-md">
                            <div className="w-full h-full rounded-full bg-white overflow-hidden">
                                <motion.img
                                    src={ProfileImg}
                                    alt="Shubham"
                                    className="w-full h-full object-cover rounded-full cursor-pointer"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </motion.div>


                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-10"
                >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <h3 className="md:w-40 text-xl md:text-2xl font-semibold text-[#1055C9] tracking-[0.18em] uppercase">
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <div className={cardBase}>
                                <FaHtml5 className="text-2xl text-orange-500" />
                                <span className="font-medium text-slate-700">HTML5</span>
                            </div>
                            <div className={cardBase}>
                                <FaCss3Alt className="text-2xl text-blue-500" />
                                <span className="font-medium text-slate-700">CSS3</span>
                            </div>
                            <div className={cardBase}>
                                <FaJs className="text-2xl text-yellow-500" />
                                <span className="font-medium text-slate-700">JavaScript</span>
                            </div>
                            <div className={cardBase}>
                                <FaReact className="text-2xl text-sky-500" />
                                <span className="font-medium text-slate-700">React</span>
                            </div>
                            <div className={cardBase}>
                                <SiTailwindcss className="text-2xl text-cyan-500" />
                                <span className="font-medium text-slate-700">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <h3 className="md:w-40 text-xl md:text-2xl font-semibold text-[#1055C9] tracking-[0.18em] uppercase">
                            Backend
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <div className={cardBase}>
                                <SiExpress className="text-2xl text-emerald-500" />
                                <span className="font-medium text-slate-700">ExpressJS</span>
                            </div>
                            <div className={cardBase}>
                                <FaNodeJs className="text-2xl text-green-600" />
                                <span className="font-medium text-slate-700">NodeJS</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <h3 className="md:w-40 text-xl md:text-2xl font-semibold text-[#1055C9] tracking-[0.18em] uppercase">
                            Database
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <div className={cardBase}>
                                <SiMongodb className="text-2xl text-green-600" />
                                <span className="font-medium text-slate-700">MongoDB</span>
                            </div>
                            <div className={cardBase}>
                                <FaDatabase className="text-2xl text-sky-600" />
                                <span className="font-medium text-slate-700">MySQL</span>
                            </div>
                            <div className={cardBase}>
                                <SiPostgresql className="text-2xl text-indigo-600" />
                                <span className="font-medium text-slate-700">PostgreSQL</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <h3 className="md:w-40 text-xl md:text-2xl font-semibold text-[#1055C9] tracking-[0.18em] uppercase">
                            Tools
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <div className={cardBase}>
                                <FaGit className="text-2xl text-orange-600" />
                                <span className="font-medium text-slate-700">Git</span>
                            </div>
                            <div className={cardBase}>
                                <FaGithub className="text-2xl text-slate-800" />
                                <span className="font-medium text-slate-700">GitHub</span>
                            </div>
                            <div className={cardBase}>
                                <SiPostman className="text-2xl text-orange-500" />
                                <span className="font-medium text-slate-700">Postman</span>
                            </div>
                            <div className={cardBase}>
                                <VscVscode className="text-2xl text-sky-600" />
                                <span className="font-medium text-slate-700">Visual studio Code</span>
                            </div>
                            <div className={cardBase}>
                                <SiGrafana className="text-2xl text-[#F46800]" />
                                <span className="font-medium text-slate-700">Grafana</span>
                            </div>
                            <div className={cardBase}>
                                <SiPrometheus className="text-2xl text-[#E6522C]" />
                                <span className="font-medium text-slate-700">Prometheus</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1055C9] mb-12 tracking-wide">
                        Education
                    </h2>

                    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800">
                                        Master of Computer Applications (MCA)
                                    </h3>
                                    <p className="text-slate-600">
                                        University of Technology, Jaipur
                                    </p>
                                </div>
                                <span className="text-sm font-medium text-[#1055C9] bg-blue-50 px-4 py-1 rounded-full">
                                    2025 – Present
                                </span>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800">
                                        Bachelor of Science (B.Sc. – Mathematics)
                                    </h3>
                                    <p className="text-slate-600">
                                        Pandit Deendayal Upadhyaya Shekhawati University, Sikar (Rajasthan)
                                    </p>
                                </div>
                                <span className="text-sm font-medium text-[#1055C9] bg-blue-50 px-4 py-1 rounded-full">
                                    2019 – 2022
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <section className="mt-20 py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1055C9] mb-12 tracking-wide">
                        Professional Experience
                    </h2>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-4 top-0 w-[3px] h-full bg-blue-200 rounded-full"></div>

                        <div className="flex flex-col gap-10">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative pl-16"
                                >
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                                        {index + 1}
                                    </div>

                                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                                        <p className="text-slate-600 font-medium mt-1">{exp.company}</p>
                                        <span className="text-sm font-medium text-[#1055C9] bg-blue-50 px-4 py-1 rounded-full mt-2 inline-block">
                                            {exp.period}
                                        </span>
                                        <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                                            {exp.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;

