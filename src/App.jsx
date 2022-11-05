import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { AppWrapper } from './App.styles'

const App = () => {
  return (
    <>
      <Router>
        <AppWrapper>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/404' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer year={2022} />
        </AppWrapper>
      </Router>
    </>
  )
}

export default App
