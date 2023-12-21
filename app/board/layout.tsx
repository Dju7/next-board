import type { Metadata } from 'next'
import Navbar from '../components/navbar/navbar'
import '../globals.css'
import Header from '../components/header/header'

export const metadata: Metadata = {
  title: 'Next-board',
  description: 'Generated by create next app',
}

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        <Header />
        <Navbar/>
        {children}
      </div>
   
  )
}
