import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline'; //like normalize.css
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className='App'>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
      <CssBaseline />
      <Button variant='contained'>Привіт світ</Button>
      <nav>
        <ul>
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li>
            <a href={`/about`}>About</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
