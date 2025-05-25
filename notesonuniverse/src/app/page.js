import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-9xl text-center font-bold">notes on universe</h1>
      <Link className="text-center" href="/about">about me, daniyal</Link>
    </div>
  );
}
