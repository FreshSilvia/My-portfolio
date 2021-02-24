import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

        //wanted to use repsonvie bar functionality
    // const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Jordan J. Howard
                </Link>
                {/* //wanted to use repsonvie bar functionality */}
                {/* <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div> */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Aboutme
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contactme
                        </Link>
                    </li>
                </ul>
              </div>
          </nav>
        </>
    )
}

export default Navbar;