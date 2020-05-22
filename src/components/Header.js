import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>Job Portal</Link>
                <ul className='nav-menu'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/show-job'>Show Jobs</Link></li>
                    <li><Link to='/job-post'>Create Job</Link></li>
                </ul>
            </nav> 
            <hr />
        </header>
    )
}

export default Header