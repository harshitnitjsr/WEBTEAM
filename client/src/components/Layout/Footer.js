import React from 'react'
import{NavLink} from "react-router-dom"
export const Footer = () => {
 return (<>
    <footer className="bg-body-tertiary text-center text-lg-start">
  {/* Copyright */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    ©  Copyright: Harshit Shrivastav
    <a className="text-body" href="https://nitjsr.ac.in/">NIT JAMSHEDPUR</a>
  </div>
  {/* Copyright */}
</footer>

    </>
 )
}