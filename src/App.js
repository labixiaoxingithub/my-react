import React from 'react';

import logo from './logo.svg';
import './App.css';

import Gallery from './components/Gallery';

import ParentComponent from './components/PassChildrenElements';
import PersonList from 'components/PersonList';


export default function App() {
  return (
    // <Gallery />
    // <ParentComponent />
    <PersonList /> 
  );
}
