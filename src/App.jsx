
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
