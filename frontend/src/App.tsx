import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth, Home } from './utils';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
