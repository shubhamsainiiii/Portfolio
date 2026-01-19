// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import contactVector from "../assets/images/contactVector.jpg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs
            .send(
                "service_59a6iwq",
                "template_ngwwcrl",
                formData,
                "UctGOMpY5pnxSU-7d"
            )
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Your message has been sent successfully!",
                    icon: "success",
                    confirmButtonColor: "#1055C9",
                });
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                setSending(false);
            })
            .catch(() => {
                Swal.fire({
                    title: "Failed!",
                    text: "Something went wrong. Please try again later.",
                    icon: "error",
                    confirmButtonColor: "#1055C9",
                });
                setSending(false);
            });
    };

    return (
        <section id="contact" className="py-24 bg-[#f5f9ff]">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto px-6"
            >
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1055C9] mb-3">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Let’s build something great together. Have an idea or opportunity in
                        mind? Feel free to reach out using the form below. I’m always open to
                        meaningful conversations.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

                    {/* Left Side – Responsive Vector Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center items-center"
                    >
                        <motion.div
                            animate={{ y: [0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <LazyLoadImage
                                src={contactVector}
                                alt="Customer Support Illustration"
                                effect="blur"
                                wrapperProps={{ style: { transitionDelay: "1s" } }}
                                className="h-full max-h-[520px] w-auto object-contain border border-slate-200 rounded-2xl shadow-slate-300 shadow-lg"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Side – Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-xl mx-auto lg:mx-0 bg-white border border-slate-200 rounded-2xl shadow-slate-300 shadow-lg p-8 md:p-10 flex flex-col justify-center">

                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full mb-5 px-4 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium bg-[#f5f9ff] focus:outline-none focus:ring-2 focus:ring-[#1055C9]"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full mb-5 px-4 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium bg-[#f5f9ff] focus:outline-none focus:ring-2 focus:ring-[#1055C9]"
                        />

                        {/* Subject */}
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full mb-5 px-4 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium bg-[#f5f9ff] focus:outline-none focus:ring-2 focus:ring-[#1055C9]"
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                            className="w-full mb-6 px-4 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium bg-[#f5f9ff] focus:outline-none focus:ring-2 focus:ring-[#1055C9]"
                        />

                        {/* Button */}
                        <motion.button
                            type="submit"
                            whileTap={{ scale: 0.95 }}
                            disabled={sending}
                            className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-500 cursor-pointer ${sending
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[#1055C9] hover:bg-blue-500"
                                }`}
                        >
                            {sending ? "Sending..." : "Send Message"}
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
