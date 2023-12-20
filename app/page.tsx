import Link from "next/link";

export default function Home() {
  return (
    <main className='h-screen w-full flex justify-center items-center bg-primary text-white'>
      <div>
      <form className="p-4 h-[450px] w-[400px] shadow-xl flex flex-col bg-clearBlue justify-center items-center gap-4">
        <h2>Connectez-vous</h2>
        <label>Login :</label>
          <input type="text" className="w-full h-10 p-2" placeholder="john Doe" />
        
        <label>Password:</label>
          <input type="text" className="w-full h-10 p-2 " placeholder="password" />
        <button type="submit" className="w-full h-10 bg-secondary border border-tertiary mt-4">Connection</button>
        <p className="py-2 mt-4 border-t border-white"> Vous n'êtes pas inscrit ? Enregistrez-vous</p>
      </form>
      <Link href="/board">Board</Link>
      </div>
    </main>
  )
}
