import React, { Fragment } from 'react';

const RecipeSearch = ({
  search,
  handleChange,
  handleSubmit,
  selectedText,
  suggestions,
  text,
}) => {
  return (
    <Fragment>
      <div className='container bg-light'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4 mb-5 text-center'>
            <h1 className='text-slanted text-capitalize s-title'>
              search for recipe with{' '}
              <strong className='text-danger'>forkify API</strong>
            </h1>
            <form className='mt-4' onSubmit={handleSubmit}>
              <label htmlFor='search' className=''>
                Enter Recipe to Search. eg: chicken
              </label>
              <div className='input-group mb-4'>
                <input
                  type='text'
                  name='search'
                  placeholder='Search for a recipe'
                  className='form-control shadow-none'
                  value={search}
                  onChange={handleChange}
                />

                <div className='input-group-append'>
                  <button
                    type='submit'
                    className='input-group-text text-white search'
                  >
                    <i className='fas fa-search'></i>
                  </button>
                </div>
              </div>
              {suggestions.length === 0 ? null : (
                <ul className='ulSuggested'>
                  {suggestions.map((item, index) => (
                    <li
                      className='suggested'
                      key={index}
                      onClick={() => selectedText(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {/* <span>Suggestions: {suggestions.length}</span> */}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeSearch;
