import React from "react";
import {
  DjangoIcon,
  JavaIcon,
  JavascriptIcon,
  NestIcon,
  NextIcon,
  PostgresIcon,
  Python,
  SpringIcon,
  TailwindIcon,
  TypescriptIcon,
} from "./Icons";
import { Variants, motion } from "framer-motion";

export const iconVariant: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2
    }
  }
};

export const AnimatedIcon = ({ icon }) => {
  return (
    <motion.div
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      whileHover={{ scale: 1.05 }}
    >
      {icon}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.div
    variants={iconVariant}
    className="card-container"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true }}>
      <div className="flex items-center justify-center text-6xl font-bold pb-10">
        <h1>Skills</h1>
      </div>
      <div>
        <div className="flex items-center justify-around">
          <AnimatedIcon icon={<Python></Python>}/>
          <AnimatedIcon icon={<DjangoIcon></DjangoIcon>}/>
          <AnimatedIcon icon={<JavaIcon></JavaIcon>}/>
          <AnimatedIcon icon={<SpringIcon></SpringIcon>}/>
          <AnimatedIcon icon={<TypescriptIcon></TypescriptIcon>}/>
        </div>
        <div className="flex items-center justify-around pt-5">
          <AnimatedIcon icon={<JavascriptIcon></JavascriptIcon>}/>
          <AnimatedIcon icon={<NestIcon></NestIcon>}/>
          <AnimatedIcon icon={<div className="dark:bg-light rounded-full">
            <NextIcon></NextIcon></div>}/>
          <AnimatedIcon icon={<TailwindIcon></TailwindIcon>}/>
          <AnimatedIcon icon={<PostgresIcon></PostgresIcon>}/>  
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
