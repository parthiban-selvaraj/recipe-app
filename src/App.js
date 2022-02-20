import './App.css';
import { useState, useEffect } from 'react';
import Form from './Components/Form';
import Recipes from './Components/Recipes';

function App() {



  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    // fetching persisted videos state from local storage
    const res = JSON.parse(localStorage.getItem('recipes'));
    const recipes = [];
    for (var i in res)
      recipes.push(res[i]);

    if (Object.keys(recipes).length > 0) {
      setRecipes(recipes);
    }
  }, [])


  // populate fresh state values if no data persisted in local storage


  // search URL = https://forkify-api.herokuapp.com/api/search?q=pizza
  // function to get the receipe search text from form element
  // making API call to food2fork website to fetch receipe data
  const getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;

    e.preventDefault();
    const api_call = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipeName}`);

    const data = await api_call.json()

    console.log('hello', data.recipes)
    setRecipes(data.recipes);

    console.log('get recipe function', recipes);
    console.log('empty screen');
    window.scroll(0, 100);
  };




  // to persist searched recipe details to local storage
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify({ ...recipes }))
  }, [recipes]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={getRecipe} />
      <Recipes recipes={recipes} />

    </div>
  );
}

export default App;
