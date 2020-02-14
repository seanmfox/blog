import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex-shrink-0">
      <nav className="flex justify-between text-white">
        <h2 className="m-5 text-3xl"><Link to="/">CodeRunGeek</Link></h2>
        <div className="m-5 mr-8 flex pt-2 text-lg">
          {/* <div className="mx-2">About</div> */}
          <div className="mx-2 blogs">
            Blogs
            <ul className="bg-gray-200 shadow-md p-3 text-black">
              <li className="mx-2"><Link to="/categories/coding">Coding</Link></li>
              <li className="mx-2"><Link to="/categories/running">Running</Link></li>
              <li className="mx-2"><Link to="/categories/geekery">Geekery</Link></li>
            </ul>
          </div>
          <div className="mx-2"><a href="https://seanmfox.io" target="_blank">Portfolio</a></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
