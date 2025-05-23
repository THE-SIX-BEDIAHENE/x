import React from "react";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <header className="flex px-5 pt-30">
        <div className="flex bg-cover bg-center w-full h-[80vh] rounded-2xl bg-[url(https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
      </header>

      <section className="flex w-full h-[100vh] px-20 gap-50">
        <div className="flex w-[20%] justify-center items-center text-gray-600 text-center text-xl font-bold">
          Mission and Vision
        </div>
        <div className="flex w-[80%] justify-center items-center text-left text-5xl font-bold ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo,
          quod sunt ipsam soluta omnis animi, repellendus consequuntur esse
          fugit tempore
        </div>
      </section>

      <section className="flex w-full h-[100vh] px-10">
        <div className="flex w-[40%] justify-center items-center">
          <div className="w-[80%] h-[70%] bg-gray-200 rounded-lg"></div>
        </div>
        <div className="flex w-[50%] justify-center items-center text-center ">
          <div class="grid grid-cols-2 gap-5 ">
            <div class="text-xl font-medium">Numbers</div>
            <div class="...">
              <h1 className="text-8xl font-bold"> 1970+</h1>
              <p className=" font-medium">Clients Worldwide</p>
            </div>
            <div class="..."></div>
            <div class=" flex-col flex ">
              <h1 className="text-8xl font-bold"> 15+</h1>
              <p className=" font-medium">Years of experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full h-[100vh] px-10 justify-center items-center">
        <div className="w-[90%] h-[65%] rounded-4xl bg-black flex flex-col justify-center items-center">
          <p className="text-white font-bold text-2xl">Partners</p>
          <div className="h-1/2 w-full"></div>
        </div>
      </section>

      <section className="flex flex-col w-full min-h-screen px-10">
        <div className="flex ">
          <div class="w-[20%] text-xl font-bold text-gray-600 ">
            Our Services
          </div>
          <div class="w-[80%] text-5xl font-bold pl-26">
            Lorem ipsum dolor sit amet consec adipiing elit.
          </div>
        </div>
        <div className="flex w-full justify-center items-center mt-10">
          <div class="grid grid-cols-2 gap-5">
            <div class="w-[40vw] h-[30vw] bg-gray-400 rounded-lg"></div>
            <div class="w-[40vw] h-[30vw] bg-gray-400 rounded-lg"></div>
            <div class="w-[40vw] h-[30vw] bg-gray-400 rounded-lg"></div>
            <div class="w-[40vw] h-[30vw] bg-gray-400 rounded-lg"></div>
          </div>
        </div>
      </section>

      <section className="w-full h-screen px-10 flex justify-center items-center">
        <div className=" w-full  h-[90vh] rounded-2xl bg-black">
        </div>
      </section>
    </>
  );
};

export default HomePage;
