import React, {useContext} from 'react'
import {RecipeContext} from '../../context/RecipeContext'

/* Components */
import {Navbar} from '../../components/Navbar/Navbar'
import {IRecipe, RecipeContextType} from '../../types/Recipe'

const Dashboard = () => {
  const {recipes} = useContext(RecipeContext) as RecipeContextType

  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}

export default Dashboard
