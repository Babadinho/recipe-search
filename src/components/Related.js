import React, { Fragment } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const Recipe = ({ recipe, handleRelatedDetails }) => {
  const { image_url, title, source_url, publisher, recipe_id, publisher_url } =
    recipe;
  return (
    <Fragment>
      <BrowserRouter>
        <div className='col-10 mx-auto col-md-6 col-lg-3 my-3'>
          <div className='card'>
            <img
              src={image_url}
              alt='recipe'
              className='img-card-top'
              style={{ height: '14rem' }}
            />
            <div className='container'>
              <h2
                className='recipe-title'
                data-toggle='tooltip'
                data-placement='top'
                title={title}
              >
                <Link
                  to={`/recipe/${recipe_id}`}
                  onClick={() => handleRelatedDetails(0, recipe_id)}
                  className='recipe-title'
                >
                  {title}
                </Link>
              </h2>
              <p className='text-slanted'>
                Publisher:{' '}
                <strong className='publish-text'>
                  <a
                    className='publish-text text-decoration-none'
                    href={publisher_url}
                  >
                    {publisher}
                  </a>
                </strong>
              </p>
              <div className='actions'>
                <div>
                  <Link to={`/recipe/${recipe_id}`}>
                    <button
                      type='button'
                      className='btn btn-secondary text-capitalize'
                      onClick={() => handleRelatedDetails(0, recipe_id)}
                    >
                      details
                    </button>
                  </Link>

                  <a
                    href={source_url}
                    className='btn btn-info mx-2 text-capitalize'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    recipe page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

export default Recipe;
