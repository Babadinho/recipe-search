import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ handleIndex }) => {
  return (
    <footer className='foot' role='contentinfo'>
      <div className='wrap clearfix'>
        <div className='row'>
          <div className='bottom'>
            <p className='copy'>Copyright 2021. All rights reserved</p>

            <nav className='foot-nav'>
              <ul>
                <li>
                  <Link
                    to='/'
                    title='Home'
                    className='text-decoration-none'
                    onClick={() => handleIndex(1)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='contact'
                    title='Contact'
                    className='text-decoration-none'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
