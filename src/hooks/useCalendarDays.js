export const useCalendarDays = (
	categoriesByDay,
	setCategoriesByDay,
	currentCategory
) => {
	const deleteCategory = (category, categoryDayIndex) => {
		const filteredCategories = categoriesByDay[
			categoryDayIndex
		].categories.filter((cat) => cat.name !== category.name)

		const updatedCategoriesByDay = [...categoriesByDay]
		updatedCategoriesByDay[categoryDayIndex] = {
			...updatedCategoriesByDay[categoryDayIndex],
			categories: filteredCategories,
		}

		setCategoriesByDay(updatedCategoriesByDay)
	}

	const handleDayClick = (day, month) => {
		if (currentCategory === null) return

		const newTask = currentCategory
		//Check if the selected day exists and obtain the position
		const categoryDayIndex = categoriesByDay.findIndex(
			(el) => el.day === day && el.month === month
		)

		if (categoryDayIndex > -1) {
			//Check if there is the same categorie on the day
			const taskIndex = categoriesByDay[categoryDayIndex].categories.findIndex(
				(el) => el.name === newTask.name
			)

			if (taskIndex < 0) {
				let updatedCategoriesByDay = [...categoriesByDay]
				updatedCategoriesByDay[categoryDayIndex] = {
					...updatedCategoriesByDay[categoryDayIndex],
					categories: [
						...updatedCategoriesByDay[categoryDayIndex].categories,
						newTask,
					],
				}
				setCategoriesByDay(updatedCategoriesByDay)
			} else {
				deleteCategory(currentCategory, categoryDayIndex)
			}
		} else if (categoryDayIndex < 0) {
			const newCategoryByDay = {
				month,
				day,
				categories: [newTask],
			}
			const updatedCategoriesByDay = [...categoriesByDay, newCategoryByDay]
			setCategoriesByDay(updatedCategoriesByDay)
		}
	}

	return { handleDayClick }
}
