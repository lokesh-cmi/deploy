import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import DocsPage from './components/Docs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route
            path="/docs"
            element={
              <div className="container">
                <DocsPage />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
