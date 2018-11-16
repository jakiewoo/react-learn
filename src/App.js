import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Topics from './components/topics';

// Add these lines:
if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'awesome-react-app:*');
}

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
);

export default App;