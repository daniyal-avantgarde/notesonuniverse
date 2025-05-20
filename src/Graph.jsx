import React, { useRef, useEffect, useMemo } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useNavigate } from 'react-router-dom';
import nodeData from "./pages/nodeData.json"

function Graph({ width, height }) {

    /* useMemo(initialise, [data])
    initialise this variable once after render
    and every time [data] is updated 
    but not every re-render*/
    const data = useMemo( () => {
        return {
            nodes: nodeData.nodes,
            links: nodeData.links
        }
    }, [])
  
    // information about how to draw the node
    function nodeCanvasObject(node, ctx, globalScale) {  
        const radius = 5 + (node.level || 1) * 3;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = node.level === 1 ? '#ffcc00' :
                        node.level === 2 ? '#ff6600' :
                        node.level === 3 ? '#cc0000' : '#999';
        ctx.fill();

        const label = node.id;
        // const fontSize = 12 / globalScale;
        const fontSize = 12 + (node.level || 1) * 2;
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.fillText(label, node.x+radius, node.y+radius);
    }
    // making node clickable radius larger as well, not just drawing it bigger
    function nodePointerAreaPaint(node, color, ctx) { 
        const radius = 5 + (node.level || 1) * 3;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
      }
    
    // rerouting url upon node clicks
    const navigate = useNavigate()
    function handleNodeClick(node) {
      navigate(`${node.id}`) 
      // navigate() changes url, just like <Link>
      // your <Route> components should catch the url change
    }

    // bounding nodes inside canvas and making canvas view fixed
    /* useRef()
    hey react, im going to have update the component after its rendered
    and i dont want to re-render the whole thing when i update it
    keep that in mind*/
    const fgRef = useRef() 
    /* useEffect(function, [data])
    run function once after rendering 
    and everytime data changes*/
    useEffect(() => {
        if (!fgRef.current) return;

        // to center canvas absolutely, not around the average of node positions
        fgRef.current.d3Force('center', null);
      
        
        const limitX = width*(94/552)
        const limitY = height*(94/552)
        /* I have no clue why this ratio roughly works
        maybe try figuring it out
        
        console.log(fgRef.current.height)
        console.log('height ', height)
        console.log('limitY ', limitY)
        console.log('force graphs zoom', fgRef.current.zoom())
        */
        

        // a custom force. not really a 'force', 
        // literally just denies nodes from exiting a boundary
        const boundingForce = () => {
          const force = (alpha) => {
            data.nodes.forEach(node => {
                node.x = Math.max(-limitX, Math.min(limitX, node.x));
                node.y = Math.max(-limitY, Math.min(limitY, node.y));
            });
          };
          force.initialize = () => {}; // D3 requires this for custom forces
          return force;
        };
      
        fgRef.current.d3Force('bounding-box', boundingForce());
        fgRef.current.d3ReheatSimulation();
      }, [width, height]); 

    return (
      <ForceGraph2D 
      ref={fgRef}
      graphData={data} 
      nodeCanvasObject={nodeCanvasObject}
      onNodeClick={handleNodeClick}
      nodePointerAreaPaint={nodePointerAreaPaint}
      enableZoomPanInteraction={false}
      width={width}
      height={height}
      />
    )
  }

export default Graph