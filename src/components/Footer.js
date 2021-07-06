import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ handleIndex }) => {
  return (
    <footer class='foot' role='contentinfo'>
      <div class='wrap clearfix'>
        <div class='row'>
          <div class='bottom'>
            <p class='copy'>Copyright 2021. All rights reserved</p>

            <nav class='foot-nav'>
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
