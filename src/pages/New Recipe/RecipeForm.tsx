//Components - Types
import React, {FormEvent, useState} from 'react'
import Button from '../../components/Shared/Button/Button'
import {IRecipe, RecipeContextType} from '../../types/Recipe'
import {RecipeContext} from '../../context/RecipeContext'
import {Navbar} from '../../components/Navbar/Navbar'

//Navigation
import {useNavigate} from 'react-router-dom'

//CSS
import './NewRecipe.css'
import '../../index.css'

const RecipeForm = () => {
  //States
  const [recipeData, setRecipeData] = useState<IRecipe | any>({
    id: Math.random(),
    recipeTitle: '',
    cookingTime: '',
    recipeIngredients: '',
    recipeMethod: '',
  })
  const [redirect, setRedirect] = useState<boolean>(false)
  const [ingredients, setIngredients] = useState<string[]>([])
  //Context
  const {saveRecipe} = React.useContext(RecipeContext) as RecipeContextType

  //Navigate
  const navigate = useNavigate()

  //Actions
  const handleSubmit = (e: FormEvent<HTMLFormElement>, formData: IRecipe | any) => {
    setRedirect(true)
    e.preventDefault()
    saveRecipe(formData)
    setTimeout(() => {
      navigate('/')
      setRedirect(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let target = e.target
    setRecipeData((prev: IRecipe) => {
      return {
        ...prev,
        [target.name]: target.value,
      }
    })
  }

  const handleAdd = () => {
    setIngredients((prev) => {
      return [...prev, recipeData.recipeIngredients]
    })
  }

  //Component Return
  return (
    <>
      <Navbar></Navbar>

      <h2 className='header-title'>Add a New Recipe</h2>
      <form onSubmit={(e) => handleSubmit(e, recipeData)}>
        <div className='recipe-form'>
          <input
            name='recipeTitle'
            type='text'
            onChange={handleChange}
            placeholder='Recipe Title'
            value={recipeData.recipeTitle}
            required
          />
          <div>
            <input
              name='recipeIngredients'
              type='text'
              onChange={handleChange}
              placeholder='Recipe Ingredients'
              value={recipeData.recipeIngredients}
              required
            />
            <Button
              buttonFunc={handleAdd}
              buttonClass='btn ingredients-btn'
              buttonText='Add'
              buttonType='button'
            />
          </div>
          <div className='ingredient-div'>
            Current Ingredients
            <ul className='ingredient-list'>
              {ingredients.map((ingredient) => {
                return <li>{ingredient}</li>
              })}
            </ul>
          </div>

          <textarea
            name='recipeMethod'
            onChange={handleChange}
            placeholder='Method'
            value={recipeData.recipeMethod}
            required
          />
          <input
            name='cookingTime'
            type='text'
            onChange={handleChange}
            placeholder='Cooking Time'
            value={recipeData.cookingTime}
            required
          />
          <Button
            buttonType='submit'
            buttonText={redirect ? 'Saving..' : 'Submit'}
            buttonClass='form-submit-btn'
          />
        </div>
      </form>
    </>
  )
}

export default RecipeForm
