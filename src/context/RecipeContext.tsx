// Type
import {RecipeContextType, IRecipe} from '../types/Recipe'
import React from 'react'

export const RecipeContext = React.createContext<RecipeContextType | null>(null)

interface ChildProps {
  children: React.ReactNode
}

const RecipeProvider: React.FC<ChildProps> = ({children}) => {
  const dummyRecipe: IRecipe = {
    id: Math.random(),
    recipeTitle: 'Enchiladas',
    cookingTime: '40 minutes',
    recipeIngredients: [
      'Tomatoes, Onion, Chicken 400gr,Tomatoes, Onion, Chicken 400gr,Tomatoes, Onion, Chicken 400gr',
    ],
    recipeMethod:
      'Heat oven to 375°F. Spray 13x9-inch (3-quart) baking dish or pan with cooking spray.Heat oven to 375°F. Spray 13x9-inch (3-quart) baking dish or pan with cooking spray.Heat oven to 375°F. Spray 13x9-inch (3-quart) baking dish or pan with cooking spray.Heat oven to 375°F. Spray 13x9-inch (3-quart) baking dish or pan with cooking spray.Heat oven to 375°F. Spray 13x9-inch (3-quart) baking dish or pan with cooking spray.',
  }

  const [recipes, setRecipes] = React.useState<IRecipe[]>([dummyRecipe])

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
