// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//     const [formdata, setformdata] = useState({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//     });
//     const handleChange = (e) => {
//         console.log(e.target.name);
//         console.log(e.target.value);
//         setformdata({ ...formdata, [e.target.name]: e.target.value });
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setformdata({
//             name: "",
//             email: "",
//             subject: "",
//             message: "",
//         });
//         console.log(formdata);
//     };
//     return (
//         <section id="contact" className="py-16 mt-15">
//             <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1.2 }}
//                 viewport={{ once: false }}
//                 className=" max-w-6xl mx-auto px-4 text-center"
//             >
//                 <h2 className="text-4xl font-bold text-teal-600 mb-3 ">Get In Touch</h2>

//                 <form className="w-full max-w-lg mx-auto bg-white p-6 shadow-sm shadow-black rounded-lg" onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Enter Your Name"
//                         name="name"
//                         value={formdata.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
//                     />
//                     <input
//                         type="email"
//                         placeholder="Enter Your Email"
//                         name="email"
//                         value={formdata.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
//                     />
//                     <input
//                         type="text"
//                         name="subject"
//                         value={formdata.subject}
//                         onChange={handleChange}
//                         required
//                         placeholder="Subject"
//                         className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
//                     />
//                     <textarea
//                         placeholder="Message"
//                         required
//                         name="message"
//                         value={formdata.message}
//                         onChange={handleChange}
//                         rows="4"
//                         className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
//                     ></textarea>

//                     {/* Submit Button */}
//                     <motion.button
//                         type="submit"

//                         whileTap={{ scale: 0.95 }}
//                         className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-teal-700 transition-transform hover:scale-110 duration-300 cursor-pointer"
//                     >
//                         Send Message
//                     </motion.button>
//                 </form>
//             </motion.div>
//         </section>
//     );
// };

// export default Contact;



import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from 'sweetalert2'

const Contact = () => {
    const [formData, setformdata] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = (e) => {
        setformdata({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        setformdata({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        // setformdata({ ...formData, [event.target.name]: event.target.value });
        const formData = new FormData(event.target);

        formData.append("access_key", "fd9a620b-c59e-477b-aeb5-9b45afc2aca1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
            });
            setformdata({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }
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

                <form className="w-full max-w-lg mx-auto bg-white p-6 shadow-sm shadow-black rounded-lg" onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
                    />
                    <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full p-3 mb-4 rounded-md focus:ring-1 shadow-sm shadow-[#001524]  focus:outline-none"
                    />
                    <textarea
                        placeholder="Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        name="message"
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



