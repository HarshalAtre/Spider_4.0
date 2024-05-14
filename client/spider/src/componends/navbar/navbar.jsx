import React from "react"
import './navbar.css'
import searchIcon from './search.svg'
// import heartIcon from './heart.svg'
import walleticon from './wallet.png'
import shoppingicon from './shopping.png'
import logo from './logo.svg'
 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="MuscleBlaze Logo" />
      </div>
      <div className="search-bar">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Type a product name. e.g. Biozyme." />
      </div>
      <div className="right-section">
        {/* <img src={heartIcon} alt="hearticonlogo" /> */}
        <img src={walleticon} alt="" />
        <img src={shoppingicon} alt="" />
        <div className="login-signup">
          <button>Login/Sign Up</button>
        </div>
      </div>
    </nav>
  );
}


 export default Navbar;



