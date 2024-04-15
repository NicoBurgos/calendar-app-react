import { useState } from 'react'

export const useInput = () => {
	const [inputCategory, setInputCategory] = useState('')
	const [selectedColor, setSelectedColor] = useState('#ffae00')
	const onChangeInput = (e) => {
		setInputCategory(e.target.value)
	}

	const resetInput = () => {
		setInputCategory('')
		setSelectedColor('#ffae00')
	}

	const handleColorChange = (event) => {
		setSelectedColor(event.target.value)
	}

	return {
		inputCategory,
		selectedColor,
		onChangeInput,
		resetInput,
		handleColorChange,
	}
}
