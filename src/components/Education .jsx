
import { FaCalendar } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
    {
        title: "Class-10th",
        institute: "Board Of Secondary Education Rajasthan",
        year: "2015-2016",
    },
    {
        title: "Class-12th",
        institute: "Board Of Secondary Education Rajasthan",
        year: "2017-2018",
    },
    {
        title: "Bachelor Of Science (B.Sc)",
        institute: "Pandit Deendayal Upadhyaya Shekhawati University, Sikar (Rajasthan)",
        year: "2019-2022",
    },
    {
        title: "Master of Computer Applications (MCA)",
        institute: "University of Technology, Jaipur (Rajasthan)",
        year: "2024-Present",
    },
    {
        title: "Full-Stack Web Development",
        institute: "Regex Software Services, Jaipur (Rajasthan)",
        year: "2024-2025",
    },
];

const Education = () => {
    return (
        <section id="education" className="py-16 flex justify-center mt-40 font-primary">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-[95vw] max-w-2xl bg-white shadow-gray-900 shadow-sm rounded-lg px-8 py-4"
            >
                <h3 className="text-4xl text-center font-bold text-[#22577a]">
                    Education
                </h3>

                <div className="relative border-l-1 border-[#22577a] pl-6 space-y-5 mt-5">
                    {educationData.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-8 top-1.5 w-4 h-4 bg-gray-900 rounded-full"></div>
                            <h4 className="text-xl text-gray-900 font-bold">{item.title}</h4>
                            <p className="text-gray-900 font-semibold">{item.institute}</p>
                            <p className="text-gray-900 flex items-center">
                                <FaCalendar className="mr-2" />
                                <span className="font-semibold">{item.year}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
