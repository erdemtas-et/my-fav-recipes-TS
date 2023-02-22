import React, {FC} from 'react'

interface FormProps {
  children: React.ReactNode
}

const AddRecipe: FC<FormProps> = ({children}) => {
  return <div>{children}</div>
}

export default AddRecipe
