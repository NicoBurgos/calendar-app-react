import './App.css'
import { List } from './components/List/List'
import { CalendarDays } from './components/CalendarDays/CalendarDays'
import { CalendarTitle } from './components/CalendarTitle/CalendarTitle'
import { CalendarMonth } from './components/CalendarMonth/CalendarMonth'
import { CurrentModeProvider } from './context/CurrentModeProvider'
import { CurrentMonthProvider } from './context/CurrentMonthProvider'
import { CurrentCategoryProvider } from './context/CurrentCategoryProvider'
import { CategoriesProvider } from './context/CategoriesProvider'
import { CategoriesByDayProvider } from './context/CategoriesByDayProvider'

function App() {
	return (
		<main>
			<CurrentModeProvider>
				<CurrentMonthProvider>
					<CurrentCategoryProvider>
						<CategoriesProvider>
							<CategoriesByDayProvider>
								<div className="list"></div>
								<List></List>
								<div className="calendar">
									<div className="calendar-container">
										<CalendarTitle></CalendarTitle>
										<CalendarDays></CalendarDays>
										<CalendarMonth></CalendarMonth>
									</div>
								</div>
							</CategoriesByDayProvider>
						</CategoriesProvider>
					</CurrentCategoryProvider>
				</CurrentMonthProvider>
			</CurrentModeProvider>
		</main>
	)
}

export default App
