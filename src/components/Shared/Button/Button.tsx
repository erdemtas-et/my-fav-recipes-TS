import React, {FC} from 'react'
import './Button.css'

type ButtonProps = {
  buttonType: 'submit' | 'button' | 'reset'
  buttonText: string
  buttonClass: string
  buttonFunc?: () => void
}

const Button: FC<ButtonProps> = ({buttonType, buttonText, buttonClass, buttonFunc}) => {
  return (
    <button onClick={buttonFunc} className={`btn ${buttonClass}`} type={buttonType}>
      {buttonText}
    </button>
  )
}

export default Button
