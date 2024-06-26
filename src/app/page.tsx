"use client";
import React from "react";
import Planet from "@/components/planet";
import Navbar from "@/components/Navbar";

const Page: React.FC = () => {
  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center min-h-screen pt-24">
      <Navbar />
      <main className="text-center py-2">
        <div className="flex items-center justify-between space-x-40">
          <h1 className="text-5xl font-bold cursor-pointer relative inline-block 
                         after:content-[''] after:absolute after:left-0 after:w-full 
                         after:h-[4px] after:bottom-[-5px] after:bg-black 
                         after:transition-transform after:duration-1000 
                         after:scale-x-0 hover:after:scale-x-150 duration-1000">
            Bem-Vindo
          </h1>
          <p className="text-2xl">Experimente as maravilhas do universo!</p>
          <Planet size={200} />
        </div>
      </main>
    </div>
  )
}
export default Page;