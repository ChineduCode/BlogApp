import Link from "next/link";

const Nav = ({navActive, setNavActive, navRef})=> {
    return(
        <nav className={`nav ${navActive ? 'nav-active' : 'nav'}`} ref={navRef}>
            <div className="container">
                <div className="menu-close" onClick={()=> setNavActive(false)}>
                    <img src="/images/icon-menu-close.svg" alt="" />
                </div>

                <ul className="nav-links">
                    <li className="nav-link">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/new">New</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/popular">Popular</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/trending">Trending</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/categories">Categories</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
