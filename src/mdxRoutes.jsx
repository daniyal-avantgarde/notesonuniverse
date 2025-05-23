/* THE PURPOSE OF THIS SCRIPT
This script automatically imports the mdx files inside the pages folder, 
and creates a list of <Route/> components,
with path=mdx file title and element=React component that renders the essay
so that you don't have to manually import each essay

VVV Bad manual automation VVV
import Immortality from "./pages/immortality.mdx" 
import God from "./pages/god.mdx" 
<Route path="immortality" element={<Immortality />}/>
<Route path="god" element={<God />}/>
*/

import { MDXProvider } from '@mdx-js/react';
import { Route, Routes } from "react-router-dom";
import components from "./mdxComponents"

const notes = import.meta.glob("./notes/*.mdx", {eager: true})

/* notes on import.meta.glob()
import.meta.glob() returns a dictionary [ path: module, path: module, ...]
typeof path is string - example path -> "./pages/immortality.mdx"
typeof module is object
  the module object has a .default attribute containing a function
  module.default() returns the React component that renders the mdx file
    i.e., the <Immortality/> component in the equivalent code below

  import Immortality from "./pages/immortality.mdx" 
  <Route path="immortality" element={<Immortality />}/>
*/

const mdxRoutes = Object.entries(notes).map(([path, module]) => {
  const Component = module.default;
  const routePath = path  // example -> "./notes/immortality.mdx"
  .split('/')             // -> ['.', 'notes', 'immortality.mdx']
  .pop()                  // -> 'immortality.mdx'
  .replace('.mdx', '')    // -> 'immortality'

  return (
  <Route path={routePath} element={
  <Component components={components}/>}></Route> 
  )
})

export default mdxRoutes
  
/* how to create mdxRoutes 
BASIC IDEA:
for each (key, value pair) in pages
return a Route component

we have to pass in path and element attributes to our <Route/> components
for example, <Route path="immortality" element={<Immortality />}/>

to construct Route's path 
  chop off ./pages/ from pages path front
  and chop off .mdx from pages path end

Route's element doesn't need to be constructed;
it's already stored in module.default()

finally, return the Route component with correct attributes 
to mdxRoutes, to store in list */









