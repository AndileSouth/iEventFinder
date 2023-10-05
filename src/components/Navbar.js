import './Navbar.css'
import { Link } from 'react-router-dom';

const NAVBAR = () => {
    return ( 
        <div className="NAVBAR">
            <div className="navbar-content row">

                <div className="brand row">
                    <h2 className='cursor'>EventFinder</h2>

                    <div className="searchBar">
                        <input type="text" placeholder='Search'/>
                    </div>
                </div>
                <div className='nav row'>
                    

                    <ul className="nav-items row ">
                        
                        <li className='md cursor'>Create event</li>
                        <li className='cursor sm'>login</li>
                        <li className='cursor sm'>Signin</li>
                        <li className='cursor menu'><svg xmlns="http://www.w3.org/2000/svg" fill='currentcolor' height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></li>
                    </ul>

                </div>
                
            </div>
        </div>
     );
}
 
export default NAVBAR;