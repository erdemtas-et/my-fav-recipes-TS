import React, {FC} from 'react'
import {IRecipe} from '../../types/Recipe'
import './RecipeComponent.css'
import logo from '../../../src/assets/images/recipe.png'
import Button from '../Shared/Button/Button'

interface RecipeProps {
  item: IRecipe
}

const RecipeComponent: FC<RecipeProps> = ({item}) => {
  return (
    <div className='recipe-component'>
      <img className='food-img' src={logo} alt='food logo' />
      <h1 className='recipe-title'>{item.recipeTitle}</h1>
      <p className='recipe-time'>Time : {item.cookingTime}</p>
      <p className='recipe-ingredients'>
        {item.recipeIngredients.length > 70
          ? item.recipeIngredients.substring(0, 70) + '...'
          : item.recipeIngredients}
      </p>
      <p className='recipe-method'>
        {item.recipeMethod.length > 280
          ? item.recipeMethod.substring(0, 280) + '...'
          : item.recipeMethod}
      </p>
      <Button buttonClass='btn details-btn' buttonType='button' buttonText='Cooking Details' />
    </div>
  )
}

export default RecipeComponent
