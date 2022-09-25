import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Home from './components/Cart/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
