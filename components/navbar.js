import Link from 'next/link';

function Navbar( active ){
    return (
        <div className="navbar-container">
            <div className="navbar">
                <ul className="navbar-links">
                    <li className={"link " + (active.active == 'home' ? 'active' : '')}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={"link " + (active.active == 'about' ? 'active' : '')}>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className={"link " + (active.active == 'caseStudies' ? 'active' : '')}>
                        <Link href="/case-studies">
                            <a>Case studies</a>
                        </Link>
                    </li>
                    <li className={"link " + (active.active == 'contact' ? 'active' : '')}>
                        <Link href="/contact">
                            <a>Contact me</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar