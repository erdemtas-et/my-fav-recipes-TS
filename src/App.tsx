// Necessities
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Routes
import {routesContainer} from './routes/routes'
// Context
import RecipeProvider from './context/RecipeContext'
// Elements
import RecipeForm from './pages/New Recipe/RecipeForm'

function App() {
  return (
    <RecipeProvider>
      <Router>
        <Routes>
          <Route
            path={routesContainer.dashboard.path}
            element={routesContainer.dashboard.element}
          />
          <Route
            path={routesContainer.addRecipe.path}
            element={routesContainer.addRecipe.element}
          ></Route>
          <Route path={routesContainer.error.path} element={routesContainer.error.element}></Route>
          <Route path={routesContainer.details.path} element={routesContainer.details.element} />
        </Routes>
      </Router>
    </RecipeProvider>
  )
}

export default App
