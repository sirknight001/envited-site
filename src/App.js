import './App.css';
import { Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import Event from './components/Event';
import Home from './components/Home';
import Layout from './components/Layout';


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="event" element={<Event />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
