import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import {motion} from "framer-motion"
import useThemeChanger from "../components/hook/useThemeChanger"

const CustomLink = ({href, title, className=""}) => {

    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            
            <span className={`h-[2px] inline-block bg-black dark:bg-light 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
            &nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
  const [mode, setMode] = useThemeChanger();

  return (
    <header className="flex items-center justify-between px-32 py-8 font-bold dark:text-light ">
      <nav>
        <CustomLink href="/" title="Home" className="mx-2"/>
        <CustomLink href="/projects" title="Projects" className="mx-2"/>
        <CustomLink href="/about" title="About" className="mx-2"/>
      </nav>


      <nav className="flex items-center justify-center">
        <motion.a href="https://github.com/dhafinn" target={"_blank"} className="mx-4 w-8"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
            <GithubIcon />
        </motion.a>
        <motion.a href="https://linkedin.com/in/dhafin-raditya " target={"_blank"} className="mx-4 w-8"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}>
            <LinkedInIcon />
        </motion.a>

        <motion.button
          onClick={() => setMode(mode==="dark" ? "light" : "dark")}
          className="mx-4 w-8"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          >
            {
              mode === "dark" ?
              <MoonIcon className="fill-yellow-300 stroke-yellow-300" /> :
              <SunIcon className="fill-yellow-300"/> 
            }
        </motion.button>
      </nav>
      
    </header>
  );
};

export default Navbar;
