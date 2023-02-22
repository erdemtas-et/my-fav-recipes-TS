import React, {useContext} from 'react'
import {RecipeContext} from '../../context/RecipeContext'
import RecipeList from '../../components/RecipeList/RecipeList'

/* Components */
import {Navbar} from '../../components/Navbar/Navbar'

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <RecipeList />
    </div>
  )
}

export default Dashboard
