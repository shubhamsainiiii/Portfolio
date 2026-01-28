import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Owner",
        role: "Director",
        company: "A2Z Mechanical Service",
        text: "Shubham delivered an excellent website for our mechanical services. The design is professional and the functionality is exactly what we needed to showcase our services.",
    },
    {
        name: "Owner",
        role: "Director",
        company: "KC Rental",
        text: "Great experience working with Shubham. He built a seamless rental platform for us that is easy to manage and user-friendly for our customers.",
    },
    {
        name: "Owner",
        role: "Director",
        company: "MightVayu",
        text: "The technical expertise Shubham brought to our project was outstanding. He helped us build a robust solution that scales well. Highly recommended!",
    },
    {
        name: "Owner",
        role: "Founder",
        company: "Universal Repair Point",
        text: "Shubham created a reliable and professional web solution for our repair services business. The platform is fast, clean, and perfectly aligned with our service needs.",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-[#f5f9ff] min-h-screen">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-bold text-[#1055C9] text-center mb-4"
                >
                    What People Say
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Words that reflect trust, collaboration, and real-world impact.
                </motion.p>


                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col relative"
                        >
                            <FaQuoteLeft className="text-4xl text-blue-100 mb-6" />

                            <p className="text-gray-600 italic mb-6 flex-grow leading-relaxed">
                                &ldquo;{testimonial.text}&quot;
                            </p>

                            <div className="mt-auto">
                                <h3 className="text-lg font-bold text-[#1055C9]">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium">
                                    {testimonial.role} @{testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section >
    );
};

export default Testimonials;
