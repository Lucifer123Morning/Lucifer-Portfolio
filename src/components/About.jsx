import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { services } from "../constants/index.js";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";

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
            🌟 I am a beginner backend developer and my passion for programming is growing every day. I am learning
            different technologies and programming languages, striving to become a true expert in my field. I am not
            afraid to take on projects that I have not encountered before and am always ready for new challenges! 💪
            <br/>
            🌐 My GitHub: https://github.com/Lucifer123Morning?tab=repositories is a place where I share my projects and
            achievements. I believe that every new task is an opportunity to learn something new and improve my skills.
            <br/>
            My boot.dev profile: https://www.boot.dev/u/lucifer_denice
            <br/>
            📚 I try not to stand still. Constant learning is the key to success in the rapidly changing world of
            technology. I actively study concepts such as RESTful API, databases, and server technologies to build
            efficient and reliable applications.
            <br/>
            🤝 I am open to collaboration and always ready to discuss new ideas and approaches. My projects cover a wide
            range of topics, and I strive to use best programming practices to ensure high-quality code.
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
