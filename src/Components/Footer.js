import React from 'react'
import './Footer.css'

 function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer id='Footsy'>
      <p id='FooterP1'>Ⓒ {currentYear} #VANLIFE</p>
      </footer>
  )
}

export default Footer