import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import ExpenseTracker from "./components/ExpenseTracker"
import ShowList from "./components/ShowList"

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={<ExpenseTracker onClose={() => {}} />}
					></Route>
					<Route path="/home" element={<ShowList />}></Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
