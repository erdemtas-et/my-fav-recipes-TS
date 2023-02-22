import React from 'react'
import {useNavigate} from 'react-router-dom'

//CSS
import './Navbar.css'
import logo from '../../../src/assets/images/recipe.png'

export const Navbar = () => {
  const openBurgerMenu = (): void => {}
  const navigate = useNavigate()
  const onClickMenu = (to: string) => {
    navigate(to)
  }

  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <img src={logo} alt='an imag' />
      </div>
      <div onClick={openBurgerMenu} className='nav-burger'>
        ____ ____ ____
      </div>
      <div className='nav-right'>
        <ul>
          <li onClick={() => onClickMenu('/add')}>Add New Recipe</li>
          <li onClick={() => onClickMenu('/')}>Recipes</li>
          <li onClick={() => onClickMenu('/conversion')}>Unit Conversion</li>
        </ul>
      </div>
    </nav>
  )
}
