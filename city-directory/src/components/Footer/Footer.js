import React from "react";
import './Footer.css';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
   
   render () {
      return (
         <footer>
            <Link to='/' className='footer-button'><img className='footer-icon' src="https://cdn-icons.flaticon.com/png/512/3817/premium/3817173.png?token=exp=1647027449~hmac=364a1fa8839399b1825e6a35fe2d2e84"></img></Link>
            <Link to='/cities' className='footer-button'><img className='footer-icon' src="https://cdn-icons.flaticon.com/png/512/2388/premium/2388419.png?token=exp=1647028287~hmac=582444720d3bf7e914d1dc2b8c13496b"></img></Link>
            <Link to='/compare' className='footer-button'><img className='footer-icon' src="https://cdn-icons.flaticon.com/png/512/5575/premium/5575998.png?token=exp=1647028049~hmac=e7c33876ff9fb297a014abd2428b6882"></img></Link>
         </footer>
      )
   }
}