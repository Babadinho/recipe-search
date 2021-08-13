import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Search from './components/Search';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [data, setData] = useState({
    recipes: [],
    url: 'https://forkify-api.herokuapp.com/api/search?q=',
    details_id: 47746,
    pageIndex: 1,
    string: 'pizza',
    search: '',
    searchNotice: '',
    error: '',
    suggestions: [],
    text: '',
  });

  const {
    url,
    recipes,
    details_id,
    pageIndex,
    string,
    search,
    searchNotice,
    error,
    suggestions,
    text,
  } = data;

  const getRecipes = () => {
    fetch(`${url}${string}`)
      .then((res) => res.json())
      .then((jsonData) => {
        if (jsonData.error) {
          setData({
            ...data,
            error: 'sorry, your search did not return any results',
            searchNotice: '',
          });
        } else {
          setData({ ...data, recipes: jsonData.recipes, error: '' });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [string]);

  const handleIndex = (index) => {
    setData({ ...data, pageIndex: index });
  };

  const handleDetails = (index, id) => {
    setData({
      ...data,
      pageIndex: index,
      details_id: id,
    });
  };

  const handleRelatedDetails = (index, id) => {
    setData({
      ...data,
      pageIndex: index,
      details_id: id,
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = Search.sort().filter((v) => regex.test(v));
    }
    setData({ ...data, search: value, suggestions, text: value });
  };

  const selectedText = (value) => {
    setData(() => ({
      ...data,
      text: value,
      suggestions: [],
      search: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      string: search,
      searchNotice: search,
      search: '',
      suggestions: [],
    });
  };

  return (
    <BrowserRouter>
      <Fragment>
        <Header handleIndex={handleIndex} />
        {pageIndex === 1 ? (
          <RecipeList
            recipes={recipes}
            handleDetails={handleDetails}
            search={search}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
            searchNotice={searchNotice}
            selectedText={selectedText}
            suggestions={suggestions}
            text={text}
          />
        ) : (
          <RecipeDetails
            details_id={details_id}
            handleIndex={handleIndex}
            handleRelatedDetails={handleRelatedDetails}
            recipes={recipes}
          />
        )}
        <Footer handleIndex={handleIndex} />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;

// const displayPage = (index) => {
//   switch (index) {
//     case 1:
//       return <RecipeList recipes={recipes} handleDetails={handleDetails} />;
//     case 0:
//       return (
//         <RecipeDetails details_id={details_id} handleIndex={handleIndex} />
//       );

//     default:
//   }
// };

// const getRecipes = async () => {
//   try {
//     const res = await fetch(url);
//     const jsonData = await res.json();

//     setData({ recipes: jsonData.recipes, pageIndex: 1 });
//   } catch (err) {
//     console.log(err);
//   }
// };
