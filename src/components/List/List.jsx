import './List.css'
import { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import { CategoryListItem } from '../CategoryListItem/CategoryListItem'
import { useInput } from '../../hooks/useInput'
import { CurrentCategoryContext } from '../../context/CurrentCategoryContext'
export const List = () => {
	const { categories, changeCategories } = useContext(CategoriesContext)
	const { changeCurrentCategory } = useContext(CurrentCategoryContext)
	const {
		inputCategory,
		selectedColor,
		onChangeInput,
		resetInput,
		handleColorChange,
	} = useInput()

	const handleSubmit = (e) => {
		e.preventDefault()
		const validateCategory = categories.find((el) => el.name === inputCategory)
		//verify if exists
		if (validateCategory === undefined) {
			const newCategory = { name: inputCategory, color: selectedColor }
			changeCategories([...categories, newCategory])
		}
		resetInput()
		changeCurrentCategory(null)
	}

	return (
		<div className="category-container">
			<div className="input-container">
				<form onSubmit={(e) => handleSubmit(e)}>
					<label htmlFor="category-name">Enter a category</label>
					<div className="inputs">
						<input
							type="text"
							name="category-name"
							id="add-category"
							placeholder="Type a category..."
							value={inputCategory}
							onChange={(e) => onChangeInput(e)}
						/>
						<input
							type="color"
							id="colorPicker"
							name="colorPicker"
							value={selectedColor}
							onChange={handleColorChange}
						></input>
					</div>

					<button type="submit">Add Category</button>
				</form>
			</div>
			<div className="list-container">
				{categories.map((category) => (
					<CategoryListItem
						key={category.name}
						category={category}
					></CategoryListItem>
				))}
			</div>
		</div>
	)
}
