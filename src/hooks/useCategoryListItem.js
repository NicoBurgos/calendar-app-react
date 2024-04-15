export const useCategoryListItem = (
	currentCategory,
	changeCurrentCategory,
	categories,
	changeCategories,
	categoriesByDay,
	changeCategoriesByDay
) => {
	const handleClickCategory = (category) => {
		currentCategory == null
			? changeCurrentCategory(category)
			: changeCurrentCategory(null)
	}

	const handleDeleteCategory = (category) => {
		let newCategories = [...categories]
		newCategories = newCategories.filter((cat) => cat.name !== category)
		changeCategories(newCategories)
		const updatedCategoriesByDay = categoriesByDay.map((day) => {
			return {
				month: day.month,
				day: day.day,
				categories: day.categories.filter((cat) => cat.name !== category),
			}
		})
		changeCategoriesByDay(updatedCategoriesByDay)
		changeCurrentCategory(null)
	}

	return {
		handleClickCategory,
		handleDeleteCategory,
	}
}
