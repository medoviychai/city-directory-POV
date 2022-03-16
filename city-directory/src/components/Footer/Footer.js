import React from "react";
import './Footer.css';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
   
   render () {
      return (
         <footer>
            <Link to='/' className='footer-button'><img className='footer-icon' src="https://img.icons8.com/pastel-glyph/50/000000/information--v2.png"></img></Link>
            <Link to='/cities' className='footer-button'><img className='footer-icon' src="https://img.icons8.com/pastel-glyph/50/000000/city--v2.png"></img></Link>
            <Link to='/compare' className='footer-button'><img className='footer-icon' src="https://img.icons8.com/pastel-glyph/50/000000/scales--v1.png"></img></Link>
         </footer>
      )
   }
}