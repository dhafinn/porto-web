import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon } from "./Icons";
import {motion} from "framer-motion"

const CustomLink = ({href, title, className=""}) => {

    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            
            <span className={`h-[2px] inline-block bg-black
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
            &nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-32 py-8 font-bold">
      <nav>
        <CustomLink href="/" title="Home" className="mx-2"/>
        <CustomLink href="/projects" title="Projects" className="mx-2"/>
        <CustomLink href="/about" title="About" className="mx-2"/>
      </nav>


      <nav className="flex items-center justify-center">
        <motion.a href="https://github.com" target={"_blank"} className="mx-4 w-8"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
            <GithubIcon />
        </motion.a>
        <motion.a href="https://linkedin.com" target={"_blank"} className="mx-4 w-8"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
            <LinkedInIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
