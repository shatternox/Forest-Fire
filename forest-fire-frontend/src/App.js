import './App.css';

import Navigation from './components/Header/Navigation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './home/Home.js';
import Articles from './articles/Articles';
import Article from './article/Article';
import Login from './login/Login'
import Contactus from './contact-us/Contactus';
import Donation from './donation/Donation';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/contact-us" element={<Contactus />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
















