import React from 'react';
import Hero from './components/Hero';
const Home = () => {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={"text-2xl font-bold"}>Hi</h1>
        <Hero />
    </main>
  )
}
export default Home;
