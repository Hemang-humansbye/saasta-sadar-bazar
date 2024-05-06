import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Sasta Sadar Bazaar</h1>
            <p>Made By :- Hemang 2210990399 , Hardik Rana 2210990356 ,Hensi Soni 221099400</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <a href="https://play.google.com/store/games?hl=en_IN&gl=US&pli=1">Google Play</a>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <a href="https://www.apple.com/in/app-store/">App Store</a>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Chitkara University,Turing Block-212,6th Row</li>
              <li>Email: sastasadarbazzar.help@gmail.com</li>
              <li>Phone: 91-5152xxxx  </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
