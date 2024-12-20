'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    {name: 'Profile', href: '/profile'},
    {name: 'info', href: '/info'},
    {name: 'config', href: '/config'}
]

export default function UsersLayout({children}: {children : React.ReactNode}){
    const pathName = usePathname()

    return(
        <div>
            {navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href)

                return (
                    <Link className={`${isActive ? 'text-red-900' : 'text-blue-900'}`}
                    key={link.href} href={link.href}>{link.name} </Link>
                )
            })}
            {children}
        </div>
    )
}