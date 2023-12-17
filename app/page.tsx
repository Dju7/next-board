import Link from "next/link";

export default function Home() {
  return (
    <main className='h-screen w-full flex justify-center items-center bg-primary'>
      <div>
      <h1>home</h1>
      <Link href="/board">Board</Link>
      </div>
    </main>
  )
}
