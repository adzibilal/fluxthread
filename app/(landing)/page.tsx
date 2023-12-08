import Hero from "./_components/Hero";
import LandingCollection from "./_components/LandingCollection";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FluxThread | Landing Page',
  description: 'Be bold to be different with FluxThread',
}

export default function Home() {
  return (
    <main>
      <Hero/>
      <LandingCollection/>
    </main>
  )
}
