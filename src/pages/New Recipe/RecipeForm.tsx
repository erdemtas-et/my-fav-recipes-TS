//Components - Types
import React, {FormEvent, useState} from 'react'
import Button from '../../components/Shared/Button/Button'
import {IRecipe, RecipeContextType} from '../../types/Recipe'
import {RecipeContext} from '../../context/RecipeContext'
import {Navbar} from '../../components/Navbar/Navbar'

//CSS
import './NewRecipe.css'
import '../../index.css'

const RecipeForm = () => {
  const [recipeData, setRecipeData] = useState<IRecipe | any>({
    id: Math.random(),
    recipeTitle: '',
    cookingTime: '',
    recipeIngredients: '',
    recipeMethod: '',
  })
  const {saveRecipe, recipes} = React.useContext(RecipeContext) as RecipeContextType

  const handleSubmit = (e: FormEvent<HTMLFormElement>, formData: IRecipe | any) => {
    e.preventDefault()
    saveRecipe(formData)
    console.log(recipes)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let target = e.target

    setRecipeData((prev: IRecipe) => {
      return {
        ...prev,
        [target.name]: target.value.trim(),
      }
    })
  }

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
          />

          <input
            name='recipeIngredients'
            type='text'
            onChange={handleChange}
            placeholder='Recipe Ingredients'
            value={recipeData.recipeIngredients}
          />
          <textarea
            name='recipeMethod'
            onChange={handleChange}
            placeholder='Recipe Title'
            value={recipeData.recipeMethod}
          />
          <input
            name='cookingTime'
            type='text'
            onChange={handleChange}
            placeholder='Recipe Title'
            value={recipeData.cookingTime}
          />
          <Button buttonType='submit' buttonText='Submit' buttonClass='form-submit-btn' />
        </div>
      </form>
    </>
  )
}

export default RecipeForm
