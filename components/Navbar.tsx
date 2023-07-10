import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const Navbar = () => {
    const session ={}
  return (
    <nav className='flexBetween navbar'>

     <div className="flex-1 flexStart gap-10">
        <Link href={'/'} >
<Image src={'/logo.svg' }
width={115}
height={30}
alt='grinibble'
/>

        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
            {NavLinks.map((link)=>(

<Link key={link.key} href={link.href} >{link.text}</Link>
            ))}
        </ul>
        </div> 
        <div className="flexCenter gap-4">
{session ?(<>
photo 
<Link href={'/create-project'}>
share Works
</Link>
</>):(

<AuthProviders />
    // dfds
// </AuthProviders>

)}

        </div>
    </nav>
  )
}

export default Navbar
