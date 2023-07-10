import React from 'react'
import './globals.css'
import { Description } from '@headlessui/react/dist/components/description/description'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata ={
    title :'grinible',
    description:'Show case and disdcover developer project'
}

const RootLayout = ({ children }: { children: React.ReactNode })  => {
  return (
   <html data-theme="cupcake">
<body >
<Navbar />
    <main>
        {children}
    </main>
    <Footer />
</body>

   </html>
  )
}

export default RootLayout
