import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
const TopHeading = () => {
  return (
    <div className="black-box">
    <span className="para">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
    </span>
    <Link to="shop-now" className="shop-now">
      ShopNow
    </Link>
  </div>
  );
}

export default TopHeading;
