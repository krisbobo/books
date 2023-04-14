import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import Navbar from './navbar';

const Header = () => (
  <div className="header">
    <h1>Bookstore CMS</h1>
    <Navbar />
    <div className="icon"><FaRegUserCircle /></div>
  </div>
);

export default Header;
