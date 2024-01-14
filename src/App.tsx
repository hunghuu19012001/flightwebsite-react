
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Fasttrack from './pages/Fasttrack/Fasttrack';
import Contact from './pages/Contact/Contact';
import Homepage from './pages/Homepage/Homepage';

function App() {

  return (
    <div id='font'>
      <BrowserRouter>
          <Routes>

              <Route path='/fasttrack' element={<Fasttrack/>}/>
              <Route path='/contactus' element={<Contact/>}/>
              <Route path='/' element={<Homepage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
