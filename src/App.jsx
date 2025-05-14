import ForceGraph2D from 'react-force-graph-2d';
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Notes on Universe</h1>
      <p>Hello!</p>

      <Graph></Graph>
      
    </div>
  );
}

function Graph() {
  const data = {
    nodes: [
      {id:"1",title:"energy"},
      {id:"2",title:"god"},
      {id:"3",title:"immortality"}
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
    window.open(`/essays/${node.title}.md`, '_blank')
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
To do list:
Notes landing page
  Labels on graph
  Links on graph

Personal page 
*/