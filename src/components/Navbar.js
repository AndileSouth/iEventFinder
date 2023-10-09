import './Navbar.css'
import { Link } from 'react-router-dom';

const NAVBAR = () => {

    //search bar

    function showSearchBar() {
        const bar = document.getElementById('searchBar');
        const computedStyle = window.getComputedStyle(bar);
        const display = computedStyle.getPropertyValue('display');

        const btn = document.getElementById('right-searchBtn');
        const cross = document.getElementById('search-cross');
        const logo = document.getElementById('logo');

        if(display === 'none') {
            bar.style.display = 'flex';
            btn.style.display = 'none';
            cross.style.display = 'inline';
            logo.style.display = 'none';
        } 
        else {
            bar.style.display = 'none';
            btn.style.display = 'inline';
            cross.style.display = 'none';
            logo.style.display = 'inline';
        }
    }

    return ( 
        <div className="NAVBAR">
            <div className="navbar-content row">

                <div className="brand row">
                    <h2 id='logo' className='cursor'> <Link to={`/`}> iEventFinder</Link></h2>

                    <div id='searchBar' className="searchBar row md">
                        <input type="text" placeholder='Search'/>

                        <svg className='cursor' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </div>
                </div>
                <div className='nav row'>
                    

                    <ul className="nav-items row ">
                        <li id='right-searchBtn' className='right-searchBtn' onClick={showSearchBar}>
                        <svg className='cursor' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </li>

                        <li id='search-cross' className='search-cross' onClick={showSearchBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </li>
                        
                        <li className='md cursor'>Create event</li>
                        <li className='cursor sm'>login</li>
                        <li className='cursor sm'>Signin</li>
                        <li className='cursor menu'> <Link to={`/menu`}> <svg xmlns="http://www.w3.org/2000/svg" fill='currentcolor' height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg> </Link></li>
                    </ul>

                </div>
                
            </div>
        </div>
     );
}
 
export default NAVBAR;