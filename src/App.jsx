import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Navbar />
      <Herosection />
    </section>
  );
}
export default App;

function Navbar() {
  return (
    <nav className="border-b bg-[#EFEEEB] justify-center flex">
      <div className=" px-1 py-4 flex justify-between items-center w-[90%]">
        <h1 className="text-2xl font-bold">hh.</h1>
        <div className="space-x-2">
          <button className="bg-white rounded-full p-2 w-20 sm:w-40">
            Log in
          </button>
          <button className="bg-[#26231E] text-white rounded-full p-2 w-20 sm:w-40">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

function Herosection() {
  return (
    <main className="  w-full py-8 bg-[#EFEEEB] sm:flex justify-center">
      <div className="gap-10 sm:flex px-5 py-3 w-[90%]">
        <div className="space-y-4 ">
          <h2 className="text-3xl font-bold sm:flex text-right">Stay Informed, Stay Inspired</h2>
          <p className="text-muted-foreground text-left sm:flex text-base">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <div className="py-4">
          <img
            alt="Author with cat"
            className="w-full h-64 object-cover rounded-lg"
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          />
        </div>

        <div className="px-1 py-3">
          <h4 className="text-xs">-Author</h4>
          <h3 className="text-lg font-semibold mb-2">Thompson P.</h3>
          <p className="text-base text-muted-foreground ">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="text-base text-muted-foreground mt-2">
            When I'm not writing, I spend time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </main>
  );
}
