import Head from "next/head";
import React, { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import profPic from "../../public/images/profile/profil scele.jpg"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Education from "../components/Education";


const AnimatedNumber = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000});
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])
  
  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
      <Head>
        <title>Dhafin | About Page</title>
        <meta name="about" content="about"></meta>
      </Head>
      <main className="flex flex-col items-center justify-center">
        <Layout className="pt-14">
          <AnimatedText text="about me!" className="mb-10 normal-case"/>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="text-medium">
              Hi! i&apos;m Dhafin, an aspiring undergraduate computer science student, a dynamic 
              individual with an insatiable passion for software engineering. 
              With a keen interest in technology and a strong drive to innovate, 
              I&apos;m committed to mastering the art of software development and making a 
              positive impact in the tech industry. 
              My journey through the computer science program is marked by dedication, creativity,
              and a relentless pursuit of knowledge.
              </p>
              <p className="mt-5">
              My passion for software engineering extends beyond academic pursuits. 
              They immerse themselves in the tech community, staying updated on the latest trends, 
              breakthroughs, and best practices in the industry. With an insatiable thirst for knowledge, 
              I&apos;m engages in personal projects and side endeavors, experimenting with innovative 
              technologies and exploring novel ways to push the boundaries of software development.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8">
              <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl"></div>
              <Image src={profPic} alt="profile pic" className='w-full h-auto rounded-2xl'/>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-around">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">projects</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={2} />+
              </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 text-right dark:text-light/75">years of experience</h2>
              </div>

            </div>
          </div>
        </Layout>
        <Layout className="pt-5">
          <Education />
        </Layout>
        <Layout className="pt-5 ">
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
