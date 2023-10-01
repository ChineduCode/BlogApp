'use client'
import Link from "next/link"
import { useState } from "react"

export default function Header(){
    let [active, setActive] = useState(false)
    
    return(
        <header>
            <div className="logo"> <img src="assets/images/logo.svg" alt="logo" id="logo"/> </div>

            <nav className={`nav ${active ? 'nav_active' : 'nav'}`}>
                <div className="icon_menu_close"> 
                    <img 
                        src="assets/images/icon-menu-close.svg" 
                        alt="close-menu" 
                        onClick={()=> setActive(false)}
                    />
                </div>
                <ul className="nav_links">
                    <li className="nav_link"> <Link href={'/'}>Home</Link> </li>
                    <li className="nav_link"> <Link href={'/new'}>New</Link> </li>
                    <li className="nav_link"> <Link href={'/popular'}>Popular</Link> </li>
                    <li className="nav_link"> <Link href={'/trending'}>Trending</Link> </li>
                    <li className="nav_link"> <Link href={'/categories'}>Categories</Link> </li>
                </ul>
            </nav>
            
            <div className="icon_menu"> 
                <img 
                    src="assets/images/icon-menu.svg" 
                    alt="menu"
                    onClick={()=> setActive(true)}
                />
            </div>
        </header>
    )
}