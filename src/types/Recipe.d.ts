import {ReactNode} from 'react'

export type IRecipe = {
  recipeTitle: string
  recipeIngredients: string[]
  recipeMethod: string
  cookingTime: string
  id: number
}

export type RecipeContextType = {
  recipes: IRecipe[]
  saveRecipe: (todo: IRecipe) => void
}

export interface IChildrenProp {
  children?: ReactNode
}
