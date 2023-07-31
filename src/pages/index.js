import Head from 'next/head'
import { Source_Code_Pro, Roboto } from 'next/font/google'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '../components/Icons'

const sourcecodepro = Source_Code_Pro({ subsets: ['latin'] })
export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
       <Head>
        <title>Dhafin | Home Page</title>
        <meta name="home" content="home"></meta>
      </Head>
      
      <main className={`flex items-center text-dark w-full min-h-screen justify-center`}>
        <Layout className="w-[70%] items-center">
          <div className='w-full'>
            
            <div className='font-bold mb-2 flex flex-col items-center self-center '>
              <AnimatedText text="Dhafin Raditya Juliawan" />
            </div>
            <div>
            <p className='font-bold'>Highly determined to be a skilled&nbsp;
            <span className={`${sourcecodepro.className} text-green-600`}>
              full-stack developer
            </span>
              , I am dedicated to bring ideas alive in&nbsp;
              <span className={`${sourcecodepro.className} text-green-600`}>web developing</span>. 
              Explore my latest&nbsp;
              <span className={`${sourcecodepro.className} text-green-600`}>projects</span>, showcasing my expertise in web development.
             </p>
            </div>
          </div>
          <div className='flex items-center self-start mt-5'>
            <Link href="/Resume.pdf" target={"_blank"} className='flex items-center bg-black text-light text-lg font-semibold p-2.5 px-4 rounded-xl
            hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
            transition duration-300'>
              Resume <LinkArrow className={"w-6 ml-1"}/>
              </Link>
            <Link href="mailto:dhafinraditya35@gmail.com" target={"_blank"} className='ml-6 text-lg font-medium capitalize underline '>Contact</Link>
          </div>
        </Layout>
        
      </main>
      
    </>
  )
}
