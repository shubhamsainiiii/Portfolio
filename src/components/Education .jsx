import React from "react";
import { FaCalendar } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="education" className="py-12 flex justify-center mt-30">
            <div className="w-[80vw] max-w-2xl bg-white shadow-gray-900 shadow-sm rounded-lg px-8 py-4">
                {/* Education Title */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: false }}
                    className="text-center mb-8"
                >
                    <h3 className="text-4xl font-bold text-teal-600">Education</h3>
                </motion.div>

                {/* Timeline Section */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: false }}
                    className="relative border-l-1 border-teal-600 pl-6 space-y-6"
                >
                    {/* Timeline Item 1 */}
                    <div className="relative ">
                        <div className="absolute -left-8 top-1 w-4 h-4 bg-[#001524] rounded-full"></div>
                        <h3 className="text-xl font-bold">Class-10th</h3>
                        <h4 className="text-gray-600 font-semibold">Board Of Secondary Education Rajasthan</h4>
                        <p className="text-[#274c77] flex items-center">
                            <FaCalendar className="mr-2" /> 2015-2016
                        </p>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative">
                        <div className="absolute -left-8 top-1 w-4 h-4 bg-[#001524] rounded-full"></div>
                        <h3 className="text-xl font-bold">Class-12th</h3>
                        <h4 className="text-gray-600 font-semibold">Board Of Secondary Education Rajasthan</h4>
                        <p className="text-[#274c77] flex items-center">
                            <FaCalendar className="mr-2" /> 2017-2018
                        </p>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="relative">
                        <div className="absolute -left-8 top-1 w-4 h-4 bg-[#001524] rounded-full"></div>
                        <h3 className="text-xl font-bold">Bachelor Of Science (B.Sc)</h3>
                        <h4 className="text-gray-600 font-semibold">
                            Pandit Deendayal Upadhyaya Shekhawati University, Sikar (Rajasthan)
                        </h4>
                        <p className="text-[#274c77] flex items-center">
                            <FaCalendar className="mr-2" /><span className=" "> 2019-2022</span>
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-8 top-1 w-4 h-4 bg-[#001524] rounded-full"></div>
                        <h3 className="text-xl font-bold">Master of Computer Applications (MCA)</h3>
                        <h4 className="text-gray-600 font-semibold">
                            University of Technology, Jaipur (Rajasthan)
                        </h4>
                        <p className="text-[#274c77] flex items-center">
                            <FaCalendar className="mr-2" /><span className=" "> 2024-Present</span>
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-8 top-1 w-4 h-4 bg-[#001524] rounded-full"></div>
                        <h3 className="text-xl font-bold">Full-Stack Web Development</h3>
                        <h4 className="text-gray-600 font-semibold">
                            Regex Software Services, Jaipur (Rajasthan)
                        </h4>
                        <p className="text-[#274c77] flex items-center">
                            <FaCalendar className="mr-2" /><span className=" ">2024-2025</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
