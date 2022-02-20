
import React from 'react'

const Form = (props) => {
  return (
    <form onSubmit={props.getRecipe} style={{marginBottom: "2rem"}}> 
        <input className='form__input' 
        type={"text"} 
        name={"recipeName"}
        placeholder={"pizza"}
        required
        autoFocus
        autoComplete='on'
        />
        <button className='form__button'>Search</button>
    </form>
  )
}

export default Form;