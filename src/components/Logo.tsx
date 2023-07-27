import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'

type Props = {}

const MotionLogo = motion(Link)

const Logo = (props: Props) => {
  return (
    <MotionLogo href="" className='flex items-center justify-center w-16 h-16 bg-black text-light rounded-full text-xl'
    whileHover={{
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:1, repeat:Infinity}
        }}>
        DRJ

    
    </MotionLogo>
  )
}

export default Logo