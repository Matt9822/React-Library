import React from 'react'
import Logo from "../assets/Library.svg"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className='footer__logo'>
              <img src={Logo} alt="" className='footer__logo--img'/>
            </figure>
          </a>
          <div className="footer__list">
            <a href="/" className='footer__link'>Home</a>
            <a href="/books" className='footer__link'>Books</a>
            <a href="/books" className='footer__link'>Cart</a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2024 Libaray
          </div>
        </div>
      </div>
    </footer>
  )
}
