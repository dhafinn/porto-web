import React from 'react'

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
    <div>
        <div className='flex items-center justify-center text-6xl font-bold pb-10'>Education</div>
        <div className='w-[75%] mx-auto relative'>

          <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Detail study="Universitas Indonesia" 
            degree="Bachelor Of Science In Computer Science" 
            year= "2021 - Present"
            description="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."/>
          </ul>
        </div>
    </div>
  )
}

export default Education