import ForceGraph2D from 'react-force-graph-2d';
import React from 'react';
import './App.css';
import { Link, Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import PageOne from "./pages/PageOne";

function App() {
  return (
    <div>
      <h1>Notes on Universe</h1>
      <p>hllo</p>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pageone">PageOne</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pageone" element={<PageOne/>}></Route>
      </Routes>

      <Graph></Graph>
      
    </div>
  );
}

function Graph() {
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

  // information about how to draw the node
  function nodeCanvasObject(node, ctx, globalScale) {
    const label = node.id;
    const fontSize = 12 / globalScale;
    ctx.fillText(label, node.x + 6, node.y + 6);

    const radius = 5;
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  function handleNodeClick(node) {
    window.open(`/essays/${node.title}`, "_blank");
  }

  return (
    <ForceGraph2D 
    graphData={data} 
    nodeCanvasObject={nodeCanvasObject}
    onNodeClick={handleNodeClick}
    />
  )
}

export default App;

/*
use vite's glob import.meta.glob to execute
for essay in essays_folder import essay
https://vite.dev/guide/features#glob-import

on button click render that markdown file

TO DO LIST:
Notes landing page
  Labels on graph
  Links on graph

Personal page 
*/