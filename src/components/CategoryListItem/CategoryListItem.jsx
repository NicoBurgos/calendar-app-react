import './CategoryListItem.css'
import { useContext } from 'react'
import { CurrentCategoryContext } from '../../context/CurrentCategoryContext'
import { CategoriesContext } from '../../context/CategoriesContext'
import { CategoriesByDayContext } from '../../context/CategoriesByDayContext'
import { useCategoryListItem } from '../../hooks/useCategoryListItem'

//TODO: Agregar opcion de editar una category

export const CategoryListItem = ({ category }) => {
	const { currentCategory, changeCurrentCategory } = useContext(
		CurrentCategoryContext
	)
	const { categoriesByDay, changeCategoriesByDay } = useContext(
		CategoriesByDayContext
	)
	const { categories, changeCategories } = useContext(CategoriesContext)
	const { handleClickCategory, handleDeleteCategory } = useCategoryListItem(
		currentCategory,
		changeCurrentCategory,
		categories,
		changeCategories,
		categoriesByDay,
		changeCategoriesByDay
	)

	return (
		<li>
			<div
				className="category-container"
				style={
					currentCategory != null && currentCategory.name == category.name
						? { backgroundColor: category.color }
						: {}
				}
			>
				<div className="category-item">
					<div
						className="category-item-title"
						onClick={() => handleClickCategory(category)}
					>
						{category.name.slice(0, 20)}
					</div>

					<div
						className="delete-button"
						onClick={() => handleDeleteCategory(category.name)}
					>
						x
					</div>
				</div>
			</div>
		</li>
	)
}
