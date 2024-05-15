import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';
import io from 'socket.io-client';

const socket = io.connect('http://127.0.0.1:8000');

console.log(socket);

const App = () => <RouterProvider router={router} />;

export default App;
