import React from 'react'
import { GlobalStyle } from './components/GlobalStyles'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { AdminPanel } from './components/AdminPanel'
import { ErrorPage } from './components/ErrorPage'
import { ProtectedRoute } from './components/ProtectedRoute'
import { LoginPage } from './components/LoginPage'

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<ErrorPage />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/admin-panel"
					element={
						<ProtectedRoute redirect="/login">
							<AdminPanel></AdminPanel>
						</ProtectedRoute>
					}
				></Route>
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
