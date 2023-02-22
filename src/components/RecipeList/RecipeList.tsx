import React, {useContext} from 'react'
import RecipeComponent from '../Recipe/RecipeComponent'
import {RecipeContext} from '../../context/RecipeContext'
import {IRecipe, RecipeContextType} from '../../types/Recipe'
import './RecipeList.css'

const RecipeList = () => {
  const {recipes} = useContext(RecipeContext) as RecipeContextType
  return (
    <div className='recipe-list'>
      {recipes.map((item: IRecipe) => {
        return (
          <div key={item.id}>
            <RecipeComponent item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
