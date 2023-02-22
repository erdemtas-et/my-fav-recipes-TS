// Type
import {RecipeContextType, IRecipe} from '../types/Recipe'
import React from 'react'

export const RecipeContext = React.createContext<RecipeContextType | null>(null)

interface ChildProps {
  children: React.ReactNode
}

const RecipeProvider: React.FC<ChildProps> = ({children}) => {
  const [recipes, setRecipes] = React.useState<IRecipe[]>([])

  // context/todoContext.tsx
  const saveRecipe = (recipe: IRecipe) => {
    const newRecipe: IRecipe = {
      id: Math.random(),
      recipeTitle: recipe.recipeTitle,
      cookingTime: recipe.cookingTime,
      recipeIngredients: recipe.recipeIngredients,
      recipeMethod: recipe.recipeMethod,
    }

    setRecipes([...recipes, newRecipe])
  }

  return <RecipeContext.Provider value={{recipes, saveRecipe}}>{children}</RecipeContext.Provider>
}

export default RecipeProvider
