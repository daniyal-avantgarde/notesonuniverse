import Link from 'next/link';
import Image from 'next/image';
import Flowchart from '@/components/Flowchart'

export default function HomePage() {

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-8xl font-bold text-center mb-8">notes on <br></br>universe</h1>

      <p className="text-center">a scattered collection of thoughts on a scattered collection of topics</p>

      {/* <Image 
      src="/vision.png" 
      alt="Vision" 
      layout="responsive"
      width={210} 
      height={297}>
      </Image> */}

      {/* <ReactFlowProvider>
        <Flowchart/>
      </ReactFlowProvider> */}
      <div>
        <Flowchart></Flowchart>
      </div>
      

      <h2 className="font-bold text-center">about me, daniyal</h2>
      <p className="text-center">studying medicine and computer science @ USYD</p>
    </div>
  );
}
