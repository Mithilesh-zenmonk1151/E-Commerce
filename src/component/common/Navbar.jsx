import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import searchIcon from '../../assests/searchbar.svg'
import cartImg from '../../assests/Cart1.svg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



function Navbar() {
    const [search , setSearch] = useState('');

    function query(e){
        e.preventDefault();
        setSearch(e.target.value);

        
    }
    return (
       <div className="Navbaar">
        <div className="uppernav">
            <div className="black-box">
                <p className='para'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <Link to='shop-now' className='shop-now'>ShopNow</Link>
            </div>
            <div className="nav-bar">
                <div className="left-nav">
                    <p className='exclusive'>Exclusive</p>

                </div>
                <div className="middle-nav">
                <div className='Home'>
                        <Link to="/" className='link'>Home</Link>
                    </div>
                    <div className='contact'>
                        <Link to="/contact" className='link'>Contact</Link>
                </div>
                    <div className='about'>
                        <Link to="/about" className='link'>About</Link>
                    </div>
                    <div className='signup'>
                        <Link to="/signup" className='link'>Sign Up</Link>
                    </div>
                    

                </div>
                <div className="right-nav">
                <div className="search">
                <input
                type="text"
                className="search-bar"
                placeholder="What are you looking for? "
                onChange={query}
                value={search}
            />
            <button className="search-btn"> <img src={searchIcon} alt="searchimage" srcset="" className='search-logo'/> </button> 
      </div>
      <div className='heart-cart'>
        <span className='hert-logo'>
            <FavoriteBorderIcon/>
        </span>
        <span className='cart-logo'> <img src={cartImg} alt="cartimage" sizes="" srcset="" /> </span>
      </div>

                </div>
            </div>
        </div>
       </div>
    )
}

export default Navbar
