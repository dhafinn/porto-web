import React from 'react'

type Props = {
  children?: React.ReactNode
};

const Layout= ({children, className}) => {
  return (
    <div className={`${className} w-full h-full inline-block bg-light p-32`}>
        {children}
    </div>
  )
}

export default Layout