import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
     I am Mohamed Anas Guerbouj, a passionate 20-year-old student in my first year of Computer Science at ISI Mahdia. My interest in web development began well before my university studies, when I gained knowledge in HTML, CSS, JS, PHP, and MySQL.

As I continued my studies, I decided to delve deeper into this field by taking a Python course. My interest in this sector wasn't limited to classroom learning. I participated in two hackathons, which were excellent opportunities to practice and showcase my skills. During the first hackathon, focused on blockchain, I secured third place. In the second, dedicated to web development, I clinched the first place thanks to my expertise in React.js, Express.js, and MongoDB.

Furthermore, I expanded my skillset by attending a Symfony 5 training course. Currently, I am learning Angular and have already completed a project using this framework. After obtaining my baccalaureate, I asked myself a question: should I focus on React or Angular? Rather than choosing one or the other, I decided to work with both, in order to compare and choose the one that suits me best. My journey testifies to my ongoing commitment to learning and my desire to stay up-to-date with technological trends.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
