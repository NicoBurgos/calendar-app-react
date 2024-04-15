import './CategoryPin.css'

export const CategoryPin = ({ category }) => {
	return (
		<div className="category-pin" style={{ backgroundColor: category.color }}>
			{category.name[0]}
		</div>
	)
}
