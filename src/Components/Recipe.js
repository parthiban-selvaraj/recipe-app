import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Recipe = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { recipe } = location.state;

    const [activeRecipe, setactiveRecipe] = useState([]);

    console.log('props', recipe)

    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`)
            .then((res) => res.json())
            .then((res) => setactiveRecipe(res.recipe));
    }, [recipeId])

    // URL = https://forkify-api.herokuapp.com/api/get?rId=47746
    return (
        <div className='container'>
            {
                activeRecipe.length !== 0 ? 
                <div className='active-recipe'>
                <img className='active-recipe__img'
                    src={activeRecipe.image_url}
                    alt={activeRecipe.title}
                />
                <h3 className='active-recipe__title'>{activeRecipe.title}</h3>
                <h4 className='active-recipe__publisher'>
                    Publisher: <span>{activeRecipe.publisher}</span>
                </h4>
                <p className='active-recipe__website'>Website:
                    <span>
                        <a href={activeRecipe.publisher_url}>{activeRecipe.publisher_url}
                        </a>
                    </span>
                </p>
                <button className='active-recipe__button' onClick={() => navigate("/")}>Go Home</button>
            </div> : <h4 style={{textAlign: 'center', marginTop: '100px' }}>Searching.....</h4>
            }
        </div>
    )
}

export default Recipe