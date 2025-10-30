import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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

        const formfield = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs.send(
            "service_59a6iwq",
            "template_ngwwcrl",
            formfield,
            "UctGOMpY5pnxSU-7d"
        ).then(() => {
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent successfully!",
                icon: "success",
            });
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setSending(false);
        }).catch(() => {
            Swal.fire({
                title: "Failed!",
                text: "Something went wrong. Please try again later.",
                icon: "error",
            });
            setSending(false);
        });
    };

    return (
        <section id="contact" className="py-16 mt-15 font-primary relative">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: false }}
                className="max-w-6xl mx-auto px-4 text-center "
            >
                <h2 className="text-4xl font-bold text-[#22577a] mb-3">Get In Touch</h2>

                <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-6 shadow-sm shadow-gray-900 rounded-lg">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded-md text-gray-900 font-semibold focus:outline-none shadow-sm shadow-gray-900"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded-md text-gray-900 font-semibold focus:outline-none shadow-sm shadow-gray-900"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded-md text-gray-900 font-semibold focus:outline-none shadow-sm shadow-gray-900"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="w-full p-3 mb-4 rounded-md text-gray-900 font-semibold focus:outline-none shadow-sm shadow-gray-900"
                    />
                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.95 }}
                        disabled={sending}
                        className={`bg-[#22577a] text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-500 cursor-pointer ${sending ? "opacity-50 cursor-not-allowed" : "hover:bg-[#08306b]"
                            }`}
                    >
                        {sending ? "Sending..." : "Send Message"}
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
