import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ handleIndex }) => {
  return (
    <footer className='foot container-fluid'>
      <div className='d-flex justify-content-center'>
        <div className='bottom'>
          <p className='copy'>
            Copyright 2021. All rights reserved. Made with{' '}
            <i class='fas fa-heart text-danger'></i> by{' '}
            <strong>
              <a
                href='https://github.com/Babadinho'
                className='text-decoration-none'
              >
                Babadinho
              </a>
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
