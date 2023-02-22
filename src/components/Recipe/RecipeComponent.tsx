import React, {FC} from 'react'
import {IRecipe} from '../../types/Recipe'
import './RecipeComponent.css'

interface RecipeProps {
  item: IRecipe
}

const RecipeComponent: FC<RecipeProps> = ({item}) => {
  return (
    <div className='recipe-component'>
      <h3 className='recipe-title'>{item.recipeTitle}</h3>
      <p className='recipe-time'>Cooking Time : {item.cookingTime}</p>
      <p className='recipe-ingredients'>{item.recipeIngredients}</p>
      <p className=''>{item.recipeMethod}</p>
    </div>
  )
}

export default RecipeComponent
