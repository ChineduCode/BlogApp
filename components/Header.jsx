'use client'

import Nav from "./Nav";
import { useState, useRef, useEffect } from 'react';

const Header = ()=> {
    let [navActive, setNavActive] = useState(false)
    const navRef = useRef(null)

    useEffect(()=> {
        const body = document.body
        body.onclick = (e)=> {
            if((e.target !== navRef.current) && !navActive){
                setNavActive(false)
            }
        }

        return ()=> {
            body.onclick = null
        }
    }, [])

    return(
        <header className="header">
            <div className="logo">
                <img src="/images/logo.svg" alt="" />
            </div>
            <Nav navActive={navActive} setNavActive={setNavActive} navRef={navRef}/>
            <div className="menu-icon" onClick={()=> setNavActive(true)}>
                <img src="/images/icon-menu.svg" alt="" />
            </div>
        </header>
    )
}

export default Header;
