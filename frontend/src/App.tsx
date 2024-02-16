import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import './index.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
  );
};

export default App;
