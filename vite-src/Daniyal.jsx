import React from 'react';
import Graph from "./Graph"
import daniyalData from "./daniyal.json"
import { useState, useEffect } from 'react';

function Daniyal() {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })

    console.log(dimensions.width)
    return (
        <div>
            <h1>Goodbye</h1>


            <Graph width={1200} height={1200} nodeData={daniyalData}></Graph>
        </div>


  )
}

export default Daniyal;