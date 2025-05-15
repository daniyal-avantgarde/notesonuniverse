import React from 'react';
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Graph from "./Graph"

import Energy from "./pages/energy.mdx"
import Immortality from "./pages/immortality.mdx"
import { MDXProvider } from '@mdx-js/react';

function App() {
  return (
    <div>
      <h1 className="text-center text-9xl">Notes on Universe</h1>

      <nav>
        <h3 className="underline">Navigation links</h3>
        <ul>
          <li className="text-blue-600"><Link to="/energy">Energy essay</Link></li>
          <li className="text-blue-600"><Link to="/immortality">Immortality essay</Link></li>
        </ul>
      </nav>

      <br />
      <br />

      <Routes>
        <Route 
        path="/energy"
        element={<MDXProvider><Energy /></MDXProvider>}></Route>
        <Route 
        path="/immortality"
        element={
          <div className="prose prose-lg">
            <MDXProvider><Immortality /></MDXProvider>
          </div>
        }></Route>
      </Routes>   
    </div>
  );
}

export default App;

/*
use vite's glob import.meta.glob to execute
for essay in essays_folder import essay
https://vite.dev/guide/features#glob-import

on button click render that markdown file

im thinking...
create
const data = {
    nodes: [
      {id:"1",title:"energy.mdx"},
      {id:"2",title:"god.mdx"},
      {id:"3",title:"immortality.mdx"}
    ],
    links: [
      {source:"1",target:"2"},
      {source:"2",target:"3"},
      {source:"3",target:"1"},
    ]
  }
nodes=[]
for file in essays folder:
  node = create node 
  node.id = file.name
  nodes.append(node)

links=[]
for file in
const data = [nodes, links]

TO DO LIST:
Notes landing page
  Labels on graph
  Links on graph

Personal page 
*/