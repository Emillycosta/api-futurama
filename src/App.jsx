
import{Route, Routes} from 'react-router-dom'
// import '/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SimpsonsApi from './pages/SimpsonsApi'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  

  return (
    <>
   <Header/>
   <Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/about' element ={<About/>} />
    <Route path='/Simpsonsapi' element ={<SimpsonsApi/>} />
   </Routes>
   <Footer/>
    </>
  )
}

export default App
