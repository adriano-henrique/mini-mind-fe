import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import FolderService from './services/folder';
import MiniMindHeader from './components/headers';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiniMindHeader />
      </header>
    </div>
  );
}