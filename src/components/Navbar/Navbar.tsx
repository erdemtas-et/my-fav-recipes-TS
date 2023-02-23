import React from 'react'
import {useNavigate, Link} from 'react-router-dom'

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
          <Link className='nav-link' to={'/add'}>
            Add New Recipe
          </Link>
          <Link className='nav-link' to={'/'}>
            Recipes
          </Link>
          <Link className='nav-link' to={'/unit-conversion'}>
            Unit Conversion
          </Link>
        </ul>
      </div>
    </nav>
  )
}
