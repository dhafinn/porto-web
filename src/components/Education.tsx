import { motion } from 'framer-motion'
import React from 'react'
import { iconVariant } from './Skills'
import pacilpng  from "../../public/images/compsci ui.png"
import Image from 'next/image'


type Props = {}

const Detail = ({study, degree, year, description}) => {
  return (
  <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <div>
      <h3 className='capitalize text-2xl font-bold'>{degree}</h3>
      <span className='capitalize font-medium text-dark/75'>{year} | {study}</span>
      <p className='font-medium w-full'>{description}</p>
    </div>
  </li>)

}

const Education = () => {
  return (
    <motion.div
    variants={iconVariant}
    className="card-container"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true }}>
        <div className='flex flex-col items-center justify-center text-6xl font-bold pb-10'>
          <h1 className='mb-20'>Education</h1>
          <Image src={pacilpng} alt="pacilpng" className='flex row items-center justify-center w-[40%] h-[40%] rounded-2xl'/>
        </div>
        <div className='w-[75%] mx-auto relative'>

          <ul className='w-full flex flex-col items-start justify-between'>
          
            <Detail study="Universitas Indonesia" 
            degree="Bachelor Of Science In Computer Science" 
            year= "2021 - Present"
            description="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Software Engineering."/>
          </ul>
        </div>
    </motion.div>
  )
}

export default Education