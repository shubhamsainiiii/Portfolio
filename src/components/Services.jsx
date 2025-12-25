// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { motion } from "framer-motion";
// import frontendImg from "../assets/images/frontend.png";
// import backendImg from "../assets/images/backend.png";
// import databaseImg from "../assets/images/database.png";

// import { Link } from 'react-router-dom';
// const MotionLink = motion(Link);
// const services = [
//   {
//     title: "Front-End Development",
//     desc: "Creating responsive, scalable, and high-performance user interfaces using React.js, Tailwind CSS, and JavaScript.",
//     img: frontendImg,
//   },
//   {
//     title: "Back-End Development",
//     desc: "Creating secure, scalable, and high-performance backend systems using Node.js, Express.js, and RESTful APIs.",
//     img: backendImg,
//   },
//   {
//     title: "Database Management",
//     desc: "Designing and managing structured and unstructured databases using MongoDB, MySQL, and PostgreSQL.",
//     img: databaseImg,
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-20 bg-[#f5f9ff]">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-3xl md:text-4xl font-bold text-center text-[#1055C9] mb-16"
//         >
//           My Services
//         </motion.h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="bg-white rounded-2xl border border-slate-200 shadow-md px-10 py-14 text-center hover:shadow-xl transition-all duration-300 max-w-lg w-full"
//             >
//               <img
//                 src={service.img}
//                 alt="Service"
//                 className="w-52 h-52 mx-auto mb-6 object-contain"
//               />

//               <h3 className="text-xl font-semibold text-[#3b5cff] mb-4">
//                 {service.title}
//               </h3>

//               <p className="text-slate-600 text-sm leading-relaxed">
//                 {service.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mt-24 text-center"
//         >
//           <h3 className="text-3xl md:text-4xl font-bold mb-6">
//             <span className="text-gray-600">Have an idea in mind?</span>
//             <br />
//             <span className="text-[#1055C9]">Let’s discuss and build it together.</span>
//           </h3>
//           <MotionLink
//             to="/contact"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block px-12 py-4 rounded-full bg-[#1055C9] text-white font-semibold shadow-lg hover:bg-[#0b46a5] transition-all duration-300"
//           >
//             Let’s Talk
//           </MotionLink>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Services;


// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import frontendImg from "../assets/images/frontend.png";
import backendImg from "../assets/images/backend.png";
import databaseImg from "../assets/images/database.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const services = [
  {
    title: "Front-End Development",
    desc: "Creating responsive, scalable, and high-performance user interfaces using React.js, Tailwind CSS, and JavaScript.",
    img: frontendImg,
  },
  {
    title: "Back-End Development",
    desc: "Creating secure, scalable, and high-performance backend systems using Node.js, Express.js, and RESTful APIs.",
    img: backendImg,
  },
  {
    title: "Database Management",
    desc: "Designing and managing structured and unstructured databases using MongoDB, MySQL, and PostgreSQL.",
    img: databaseImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#f5f9ff]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#1055C9] mb-16"
        >
          My Services
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 place-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-md px-10 py-14 text-center hover:shadow-xl transition-all duration-300 max-w-lg w-full"
            >
              {/* Lazy Loaded Image with Blur */}
              <LazyLoadImage
                src={service.img}
                alt={service.title}
                effect="blur"
                wrapperProps={{ style: { transitionDelay: "1s" } }}
                className="w-52 h-52 mx-auto mb-6 object-contain"
              />

              <h3 className="text-xl font-semibold text-[#3b5cff] mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gray-600">Have an idea in mind?</span>
            <br />
            <span className="text-[#1055C9]">
              Let’s discuss and build it together.
            </span>
          </h3>

          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 rounded-full bg-[#1055C9] text-white font-semibold shadow-lg hover:bg-[#0b46a5] transition-all duration-300"
          >
            Let’s Talk
          </MotionLink>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
