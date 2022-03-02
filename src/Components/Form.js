
import React, { useState } from 'react'
// import AutoCompleteText from './AutoCompleteText';
import receipesNameList from './receipesNameList';
// import './Form.css';

const Form = (props) => {

  const [state, setState] = useState({
    suggestions: [],
    text: ''
  });

  const suggestionSelected = (value) => {
    setState(() => ({
      suggestions: [],
      text: value
    }));
  }

  const onTextChanged = (e) => {
    console.log('items', receipesNameList)
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = receipesNameList.sort().filter(v => regex.test(v));
      setState(() => ({
        suggestions,
        text: value
      }));
    }
  }

  return (
    <>
    <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
        <input className='form_input'
          type={"text"}
          name={"recipeName"}
          placeholder={"pizza"}
          value={state.text}
          required
          autoFocus
          autoComplete='on'
          onChange={(e) => onTextChanged(e)}
        />
        
        {state.suggestions.length === 0 ?
          null :
          <ul>
            {state.suggestions.map(item => <li key={state.suggestions.indexOf(item)} onClick={() => suggestionSelected(item)}>{item}</li>)}
          </ul>
        }
        
        <button className='form__button'>Search</button>
      </form>
      {/* <AutoCompleteText items={receipesNameList}/> */}
      </>
  )
}

export default Form;