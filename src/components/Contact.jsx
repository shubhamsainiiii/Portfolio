import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
        setformdata({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        console.log(formdata);
    };
    return (
        <section id="contact" className="py-16 mt-15">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: false }}
                className=" max-w-6xl mx-auto px-4 text-center"
            >
                <h2 className="text-4xl font-bold text-teal-600 mb-3 ">Get In Touch</h2>

                <form className="w-full max-w-lg mx-auto bg-white p-6 shadow-sm shadow-black rounded-lg" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        value={formdata.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formdata.subject}
                        onChange={handleChange}
                        required
                        placeholder="Subject"
                        className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
                    />
                    <textarea
                        placeholder="Message"
                        required
                        name="message"
                        value={formdata.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
                    ></textarea>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"

                        whileTap={{ scale: 0.95 }}
                        className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-teal-700 transition-transform hover:scale-110 duration-300 cursor-pointer"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;

