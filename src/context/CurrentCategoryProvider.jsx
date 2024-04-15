import { useState } from 'react'
import { CurrentCategoryContext } from './CurrentCategoryContext'

export const CurrentCategoryProvider = ({ children }) => {
	const [currentCategory, setCurrentCategory] = useState(null) //true=Show month, false=Show days
	const changeCurrentCategory = (newCategory) => {
		setCurrentCategory(newCategory)
	}
	return (
		<CurrentCategoryContext.Provider
			value={{ currentCategory, changeCurrentCategory }}
		>
			{children}
		</CurrentCategoryContext.Provider>
	)
}
