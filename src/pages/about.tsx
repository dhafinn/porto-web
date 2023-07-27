import Head from "next/head";
import React, { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import profPic from "../../public/images/profile/developer-pic-2.jpg"
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
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="flex flex-col items-center justify-center">
        <Layout className="pt-14">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-10"/>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="text-medium">
                Hi, I`m CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>

              <p className="text-medium my-4">
                I believe that design is about more than just making things
                look pretty - its about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="text-medium">
                Whether Im working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8">
              <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl"></div>
              <Image src={profPic} alt="Codebucks" className='w-full h-auto rounded-2xl'/>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-around">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">projects</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={2} />+
              </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 text-right">years of experience</h2>
              </div>

            </div>
          </div>
        </Layout>
        <Layout className="pt-8">
          <Education />
        </Layout>
        <Layout className="pt-8">
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
