import React from 'react'
import Layout from './Layout'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-dark font-medium text-lg bg-light'  >
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <span>Dhafin Raditya Juliawan</span>
        </Layout>
    </footer>
  )
}

export default Footer

