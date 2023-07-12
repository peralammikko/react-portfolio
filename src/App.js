import './App.css';
import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Layout from './components/Layout';
import Sandbox from './components/Sandbox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="projects" element={<Projects/>} />
          <Route path="sandbox" element={<Sandbox/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
