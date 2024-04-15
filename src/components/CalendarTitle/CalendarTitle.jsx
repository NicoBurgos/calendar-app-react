import './CalendarTitle.css'
import { useContext } from 'react'
import { CurrentModeContext } from '../../context/CurrentModeContext'
import { CurrentMonthContext } from '../../context/CurrentMonthContext'
import { useHandleMonths } from '../../hooks/useHandleMonths'

export const CalendarTitle = () => {
	const { currentMode, changeCurrentMode } = useContext(CurrentModeContext)
	const { currentMonth, changeCurrentMonth } = useContext(CurrentMonthContext)
	const { handlePrevMonth, handleNextMonth, handleTitleClick } =
		useHandleMonths(currentMonth, changeCurrentMonth, changeCurrentMode)
	if (currentMode === false) {
		return (
			<>
				<div className="title-container-days">
					<button onClick={handlePrevMonth}>{'<--'}</button>
					<h2 onClick={handleTitleClick}>
						2024 {currentMonth ? '- ' + currentMonth.month : ''}
					</h2>
					<button onClick={handleNextMonth}>{'-->'}</button>
				</div>
				<div className="title-days">
					<h4>Sunday</h4>
					<h4>Monday</h4>
					<h4>Tuesday</h4>
					<h4>Wednesday</h4>
					<h4>Thursday</h4>
					<h4>Friday</h4>
					<h4>Saturday</h4>
				</div>
			</>
		)
	} else {
		return (
			<>
				<div className="title-container-month">
					<h2>2024 </h2>
				</div>
			</>
		)
	}
}
