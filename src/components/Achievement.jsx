import React from "react";
import { motion } from "framer-motion";
import { FaCodepen, FaCode, FaLaptopCode, FaHackerrank } from "react-icons/fa";

const achievements = [
    {
        text: "Silver Badge on CodeChef – 250+ Problems Solved in C++",
        platform: "CodeChef",
        link: "https://www.codechef.com/users/shubhcoding27",
        icon: <FaCodepen size={24} className="text-white" />
    },
    {
        text: "Solved 75+ LeetCode Problems (Data Structures & Algorithms) in C++",
        platform: "LeetCode",
        link: "https://leetcode.com/u/shubhamsaini27/",
        icon: <FaCode size={24} className="text-white" />
    },
    // {
    //     text: "Solved 150+ GeeksforGeeks Problems (Data Structures & Algorithms) in C++",
    //     platform: "GeeksforGeeks",
    //     link: "https://auth.geeksforgeeks.org/user/yourusername",
    //     icon: <FaLaptopCode size={24} className="text-white" />
    // },
    {
        text: "Earned a 3-Star Badge in Problem Solving on HackerRank by solving DSA Problems using C++",
        platform: "HackerRank",
        link: "https://www.hackerrank.com/shubhamthoi27",
        icon: <FaHackerrank size={24} className="text-white" />
    }
];

// Motion variants for container and items
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const Achievement = () => {
    return (
        <motion.section
            id="achievement"
            className="py-16 px-6 md:px-0 max-w-5xl mt-30 mx-auto font-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={containerVariants}
        >
            <h2 className="text-4xl font-bold mb-10 text-[#22577a] text-center">
                Achievements
            </h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((item, idx) => (
                    <motion.a
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center bg-white shadow-sm shadow-gray-900 rounded-lg p-5 cursor-pointer transition-all duration-300"
                    >
                        <div className="bg-[#22577a] rounded-full p-4 mb-4 flex items-center justify-center">
                            {item.icon}
                        </div>
                        <h3 className="text-[#22577a] font-bold text-lg mb-2 text-center">
                            {item.platform}
                        </h3>
                        <p className="text-gray-900 font-medium text-center">{item.text}</p>
                    </motion.a>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Achievement;
