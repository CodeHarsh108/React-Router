import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gray-50 flex flex-col'>
        <header className='bg-white shadow-sm'>
          <div className='container mx-auto px-4 py-6'>
            <h1 className='text-3xl font-bold text-blue-600'>My React Router App</h1>
          </div>
        </header>
        
        <nav className='bg-blue-600 shadow-md'>
          <div className='container mx-auto px-4'>
            <ul className='flex justify-center space-x-8 py-4'>
              <li>
                <Link
                  className='text-white hover:text-yellow-300 font-medium transition duration-300 px-4 py-2 rounded-md hover:bg-blue-700'
                  to={'/'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='text-white hover:text-yellow-300 font-medium transition duration-300 px-4 py-2 rounded-md hover:bg-blue-700'
                  to={'/about'}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className='text-white hover:text-yellow-300 font-medium transition duration-300 px-4 py-2 rounded-md hover:bg-blue-700'
                  to={'/contact'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <main className='flex-grow container mx-auto px-4 py-8'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </main>
        
        <footer className='bg-gray-100 border-t border-gray-200 py-6'>
          <div className='container mx-auto px-4 text-center text-gray-600'>
            <p>© 2023 My React Router App. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App;