import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar';
import { Contact, Custom404, Home, ProjectGallery } from './components/Pages'
import './App.css'

function App() {
  return (
    <Router basename={`react-portfolio`}>
      <MyNav />
    <Routes>
      <Route path ='/ProjectGallery' element={<ProjectGallery />} />
      <Route path ='/contact' element={<Contact />} />
      <Route path ='/404' element={<Custom404 />} />
      <Route path ='' element={<Home />} />
    </Routes>
    </Router>
  )
}

export default App
