import Home from './Pages/Home/Home'
import Market from './Pages/Market/Market'
import NotFound from './Pages/NotFound'
import Sidebar from './Pages/components/Sidebar'
import './index.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/market' element={<Market />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
