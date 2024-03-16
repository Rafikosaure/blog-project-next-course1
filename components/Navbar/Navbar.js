import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar d-flex justify-content-center navbar-dark bg-primary">
            <Link className='link-light px-3' href={"/"}>Accueil</Link>
            <Link className='link-light px-3' href={"/blog"}>Blog</Link>
            <Link className='link-light px-3' href={"/users"}>Liste</Link>
        </nav>
    </div>
  )
}
