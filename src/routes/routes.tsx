import Dashboard from '../pages/Dashboard/Dashboard'
import AddRecipe from '../pages/New Recipe/AddRecipe'
import Error from '../pages/Error/Error'
import Details from '../pages/Details/Details'
import RecipeForm from '../pages/New Recipe/RecipeForm'

const dashboardRoute = {
  path: '/',
  element: <Dashboard />,
}

const detailsRoute = {
  path: '/recipe/:id',
  element: <Details />,
}

const errorRoute = {
  path: '/*',
  element: <Error />,
}

const addRecipeRoute = {
  path: '/add',
  element: (
    <>
      <RecipeForm></RecipeForm>
    </>
  ),
}

export const routesContainer = {
  dashboard: dashboardRoute,
  details: detailsRoute,
  error: errorRoute,
  addRecipe: addRecipeRoute,
}
