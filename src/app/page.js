import Link from 'next/link';
import Image from 'next/image';
import Flowchart from '@/components/Flowchart'

export default function HomePage() {

  return (
    <div className="p-8 max-w-md sm:max-w-1xl mx-auto overflow-hidden">

      <h1 className="text-7xl md:text-8xl font-bold text-center mb-8">notes on <br></br>universe</h1>

      <p className="text-center">a scattered collection of thoughts on a scattered collection of topics</p>
      
      <div className="text-red-500 sm:text-green-500">sm test</div>


      <Flowchart className="w-full"/>

      


      <h2 className="font-bold text-center">about me, daniyal</h2>
      <p className="text-center">studying medicine and computer science @ USYD</p>
    </div>
  );
}
