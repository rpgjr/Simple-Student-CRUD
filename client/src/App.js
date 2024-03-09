import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Student from './pages/Student'
import AddStudent from './pages/AddStudent'
import UpdateStudent from './pages/UpdateStudent'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Student />} />
          <Route path='/add' element={<AddStudent />} />
          <Route path='/update/:id' element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
