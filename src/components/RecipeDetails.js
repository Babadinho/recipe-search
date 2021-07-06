import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Related from './Related';

const RecipeDetails = ({
  handleIndex,
  details_id,
  recipes,
  handleRelatedDetails,
}) => {
  const [recipeDetails, setRecipeDetails] = useState({
    recipe: [],
  });
  const { recipe = {} } = recipeDetails;

  const id = details_id;
  const url = `https://forkify-api.herokuapp.com/api/get?rId=${id}`;

  // const getRecipe = async () => {
  //   try {
  //     const recipeDetails = await fetch(url);
  //     const jsonData = await recipeDetails.json();

  //     setRecipeDetails({
  //       recipe: jsonData,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getRecipe = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipeDetails({
          recipe: data.recipe,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details_id]);

  const {
    image_url = '',
    title = '',
    source_url = '',
    publisher = '',
    publisher_url = '',
    ingredients = [],
  } = recipe;

  return (
    <Fragment>
      <div className='container mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Link to='/'>
              <button
                type='button'
                className='btn btn-secondary back-button p-2 mb-5 text-capitalize'
                onClick={() => handleIndex(1)}
              >
                back to recipe list
              </button>
            </Link>

            <img
              src={image_url}
              alt='recipe'
              className='d-block w-100 recipeImage'
            />
          </div>
          <div className='col-10 mx-auto col-md-6'>
            <h1 className='s-title'>{title}</h1>
            <h6 className='text-secondary publisher-text text-capitalize'>
              Publisher:{' '}
              <strong className='publish-text'>
                <a
                  className='publish-text text-decoration-none'
                  href={publisher_url}
                >
                  {publisher}
                </a>
              </strong>
            </h6>

            <ul className='list-group list-group-flush mt-4'>
              <h2 className='mb-2 ribbon large mx-auto'>Ingredients</h2>
              {ingredients === undefined ? (
                <p>Loading...</p>
              ) : (
                ingredients.map((item, index) => {
                  return (
                    <li key={index} className='list-group-item text-slanted'>
                      {item}
                    </li>
                  );
                })
              )}
            </ul>
            <a
              href={publisher_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mt-4 mb-4 text-capitalize button big'
            >
              Publisher Link
            </a>
            <a
              href={source_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-secondary mx-3 mt-4 mb-4 text-capitalize button big'
            >
              Recipe Page
            </a>
          </div>
        </div>
        <div className='row entries'>
          <h1 className='text-slanted s-title text-danger'>Similar Recipes</h1>
          {recipes
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map((recipe) => {
              return (
                <Related
                  key={recipe.recipe_id}
                  recipe={recipe}
                  handleRelatedDetails={handleRelatedDetails}
                />
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeDetails;
