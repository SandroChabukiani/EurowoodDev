import React, { useState } from 'react';
import Product from './Product';
import Dropdown from './Dropdown';
import '../../App.css'
import Head from './Head';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
    };
  return (
    <div className='scc'>
      <Head />
      <div className='second'>
      <div className="container">
                <input type="checkbox" id="check" checked={isSidebarOpen} onChange={handleSidebarToggle} />
                <div className="nav-btn">
                    <div className="nav-links">
                        <ul>
                            <li className="nav-link" style={{ '--i': '.6s' }}>
                                <Link className='sas' to="/">მთავარი</Link>
                            </li>
                            <li className="nav-link" style={{ '--i': '.85s' }}>
                                <a className='sas' href="#">ხის მასალა<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link to='/catalog/ლამინირებული ფანერა' onClick={handleLinkClick}>ლამინირებული ფანერა</Link>
                                        </li>
                                        <li className="dropdown-link">
                                            <Link to="/catalog/ლამინატი">ლამინირებული იატაკი</Link>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="#">ფანერა<i className="fas fa-caret-down"></i></a>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <Link to="/catalog/ფანერა 1/2 ხარისხი">1/2 ხარისხი</Link>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <Link to="/catalog/ფანერა 2/3 ხარისხი">2/3 ხარისხი</Link>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <Link to="/catalog/ფანერა 3/4 ხარისხი">3/4 ხარისხი</Link>
                                                    </li>
                                                    {/* <li className="dropdown-link">
                                                        <a href="#">More<i className="fas fa-caret-down"></i></a>
                                                        <div className="dropdown second">
                                                            <ul>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 1</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 2</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 3</a>
                                                                </li>
                                                                <div className="arrow"></div>
                                                            </ul>
                                                        </div>
                                                    </li> */}
                                                    {/* <div className="arrow"></div> */}
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <li className="dropdown-link">
                                            <a href="#"> </a>
                                        </li> */}
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link" style={{ '--i': '1.1s' }}>
                                <a className='sas' href="#">სამშენებლო და სარემონტო<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link to="/catalog/პროდუქტი მალე დაემატება">პროდუქცია მალე დაემატება</Link>
                                        </li>
                                        {/* <li className="dropdown-link">
                                            <a href="#">Link 2</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="#">Link 3<i className="fas fa-caret-down"></i></a>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 1</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 2</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 3</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">More<i className="fas fa-caret-down"></i></a>
                                                        <div className="dropdown second">
                                                            <ul>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 1</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 2</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 3</a>
                                                                </li>
                                                                <div className="arrow"></div>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <div className="arrow"></div>
                                                </ul>
                                            </div>
                                        </li> 
                                        <li className="dropdown-link">
                                            <a href="#">Link 4</a>
                                        </li>
                                        <div className="arrow"></div>*/}
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link " style={{ '--i': '1.1s' }}>
                                <a className='sas' href="#">კერამიკა<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link to="/catalog/პროდუქტი მალე დაემატება">პროდუქცია მალე დაემატება</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link" style={{ '--i': '1.1s' }}>
                                <a className='sas' href="#">აქსესუარები<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link to="/catalog/პროდუქტი მალე დაემატება">პროდუქცია მალე დაემატება</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>     
                            <li className="nav-link" style={{ '--i': '1.35s' }}>
                                <Link to='/aboutus' className='sas' >ჩვენს შესახებ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hamburger-menu-container">
                    <div className="hamburger-menu">
                        <div></div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Header;
