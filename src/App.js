import "./App.css"
import Sidebars from './Components/Sidebars';
import Sales from './Components/Sales';
import React from 'react';
import '@shopify/polaris/dist/styles.css';
import { } from "@shopify/polaris";

export default function App() {

  return (
    <div className="App">
      <div class="grid-wrapper">
        <div class="sidebargrid">
          <Sidebars />
        </div>
        <div class="sidebargrid">
          <Sales />
        </div>
      </div>
    </div>
  );
}



