import { useState } from 'react'
import { CategoriesByDayContext } from './CategoriesByDayContext'

export const CategoriesByDayProvider = ({ children }) => {
	const [categoriesByDay, setCategoriesByDay] = useState([
		{
			month: 'January',
			day: 5,
			categories: [
				{ name: 'holidays', color: '#ffae00' },
				{ name: 'work', color: '#ff0000' },
			],
		},
		{
			month: 'January',
			day: 1,
			categories: [{ name: 'holidays', color: '#ffae00' }],
		},
	])
	const changeCategoriesByDay = (newCategories) => {
		setCategoriesByDay(newCategories)
	}
	return (
		<CategoriesByDayContext.Provider
			value={{ categoriesByDay, changeCategoriesByDay }}
		>
			{children}
		</CategoriesByDayContext.Provider>
	)
}
