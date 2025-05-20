import React from 'react';
import './App.css';
import { Link, Route, Routes, Outlet } from "react-router-dom"
import Graph from "./Graph"
import mdxRoutes from "./mdxRoutes"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        {mdxRoutes}
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <h1 className="text-center text-9xl">Notes on Universe</h1>
      <Graph width={window.innerWidth} height={600}/>

      {/*
        <Outlet />
        */}
    </div>
  )
}

function BackHome() {
  return (
    <Link to="/"> &lt; Back Home</Link>
  )
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

/*
modules = []
for file in folder:
  const module = await import(`./dir/${file}.js`)

for module in modules:



*/