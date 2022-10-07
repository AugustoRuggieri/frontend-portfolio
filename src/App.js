import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
