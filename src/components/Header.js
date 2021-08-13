import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ handleIndex }) => {
  return (
    <div className='container-fluid'>
      <div className='wrap clearfix'>
        <a href='/' title='SocialChef' className='logo'>
          <img src='./images/recipe.jpg' alt='SocialChef logo' />
        </a>

        <nav className='main-nav' role='navigation' id='menu'>
          <ul>
            <li className='current-menu-item'>
              <Link to='/' title='Home' onClick={() => handleIndex(1)}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to='/recipes' title='Recipes'>
                <span>Recipes</span>
              </Link>
            </li>

            <li>
              <Link to='/contact' title='Contact'>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
