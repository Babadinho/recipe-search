import React, { Fragment } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

const RecipeList = ({
  recipes,
  handleDetails,
  search,
  searchNotice,
  handleChange,
  handleSubmit,
  selectedText,
  suggestions,
  text,
  error,
}) => {
  return (
    <Fragment>
      <RecipeSearch
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        selectedText={selectedText}
        suggestions={suggestions}
        text={text}
      />
      <div className='container my-5 input-search'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-1'>
            <h1 className='text-slanted s-title text-danger'>recipe list</h1>
          </div>
          {searchNotice ? (
            <h2 className='search-notice'>
              we found {recipes.length} results for{' '}
              <b className='text-search'>'{searchNotice}</b>'
            </h2>
          ) : (
            ''
          )}
        </div>

        <div className='row entries recipe-list'>
          {error ? (
            <h1 className='search-notice'>{error}</h1>
          ) : (
            recipes.map((recipe) => {
              return (
                <Recipe
                  key={recipe.recipe_id}
                  recipe={recipe}
                  handleDetails={handleDetails}
                />
              );
            })
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeList;
