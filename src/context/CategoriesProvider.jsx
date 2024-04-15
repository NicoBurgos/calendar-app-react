import { useState } from 'react'
import { CategoriesContext } from './CategoriesContext'

export const CategoriesProvider = ({ children }) => {
	const [categories, setCategories] = useState([
		{ name: 'holidays', color: '#ffae00' },
		{ name: 'work', color: '#ff0000' },
		{ name: 'bokita', color: '#1900ff' },
	])
	const changeCategories = (newCategories) => {
		setCategories(newCategories)
	}
	return (
		<CategoriesContext.Provider value={{ categories, changeCategories }}>
			{children}
		</CategoriesContext.Provider>
	)
}
