import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Main from './Main';
import MyOfficeApp from './MyOfficeApp';
import ReactQueryNasa from './ReactQueryNasa';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/office">Office</Link>
          </li>
          <li>
            <Link to="/nasa">NASA</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/office' element={<MyOfficeApp />} />
          <Route exact path='/nasa' element={<ReactQueryNasa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;