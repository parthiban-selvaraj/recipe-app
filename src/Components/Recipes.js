import React from 'react';
import { Link} from 'react-router-dom';

const bigTitle = (e) => {
    console.log(e.target.innerText)
}

const Recipes = props => {
    return (
        <div className='container' >
            <div className='row'>
                {props.recipes ?
                    props.recipes.map((recipe) => {
                        return (
                            // for individual recipe data
                            <div key={recipe.recipe_id} className='col-md-4' style={{ marginBottom: "2rem" }}>
                                <div className='recipes__box'>
                                    <img
                                        className='recipe__box-img'
                                        src={recipe.image_url}
                                        alt={recipe.title}
                                    />
                                    <div className='recipe__text'>
                                        <h5 className='recipes__title' onMouseOver={bigTitle}>
                                            {recipe.title.length < 20 ?
                                                `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                                        </h5>
                                        <p className='recipes__subtitle'>Publisher:
                                            <span>
                                                {recipe.publisher}
                                            </span></p>
                                    </div>
                                    <button className='recipe_buttons'>
                                        <Link to={`/recipe/${recipe.recipe_id}`} state={{recipe: recipe.title}}>View Recipe</Link>
                                    </button>
                                </div>
                            </div>
                        )
                    }) : <h1>No results</h1>
                }
            </div>
        </div>
    )
}

export default Recipes