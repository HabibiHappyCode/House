import logo from './logo.svg';
import './App.css';
import Header from './Comonents/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
