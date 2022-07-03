import React from 'react'
import { BiCopyright } from 'react-icons/bi'

const Footer = ({ footerDate }) => {
  return (
    <footer>
    
      <p> ©{footerDate.current}| Designed & coded by Wais Nazari</p>

    </footer>
  )
}

export default Footer