import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Auth, Home, Dashboard } from './utils';
import {
  General,
  Orders,
  Employees,
  Customers,
  Kanban,
  Editor,
  Calender,
  ColorPicker,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
  Stacked,
} from './utils';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="general" element={<General />} />
          <Route path="orders" element={<Orders />} />
          <Route path="employees" element={<Employees />} />
          <Route path="customers" element={<Customers />} />

          {/* Apps */}
          <Route path="kanban" element={<Kanban />} />
          <Route path="editor" element={<Editor />} />
          <Route path="calendar" element={<Calender />} />
          <Route path="color-picker" element={<ColorPicker />} />

          {/* Charts */}
          <Route path="line" element={<Line />} />
          <Route path="area" element={<Area />} />
          <Route path="bar" element={<Bar />} />
          <Route path="pie" element={<Pie />} />
          <Route path="financial" element={<Financial />} />
          <Route path="color-mapping" element={<ColorMapping />} />
          <Route path="pyramid" element={<Pyramid />} />
          <Route path="stacked" element={<Stacked />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
