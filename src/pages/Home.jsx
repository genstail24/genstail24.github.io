import React from 'react';
import logoWithoutBorder from './../assets/images/logoWithoutBorder.png';
import MyTemplate from './../components/MyTemplate'
const Home = () => {
  return (
    <>
      <MyTemplate>
        <main className="mt-24 md:mt-24 px-16 flex flex-col items-center relative z-20 ">
          <img src={logoWithoutBorder} className="h-64" />
          <h1 className="text-center text-gray-100 mb-2 text-4xl">Hallo World! I'm Genta.</h1>
          <h3 className="text-gray-100 text-2xl mb-6">I am a <span className="text-my-blue-light border-b-4 border-my-blue-light">Developer</span> </h3>
          <div className="flex justify-center">
            <a href="" className="inline-block px-4 py-2 bg-my-blue-dark rounded-lg text-my-white uppercase text-xl transition hover:bg-my-white hover:text-my-blue-dark mx-2">About me</a>
            <a href="" className="inline-block px-4 py-2 bg-my-blue-dark rounded-lg text-my-white uppercase text-xl transition hover:bg-my-white hover:text-my-blue-dark mx-2">my Projects</a>
          </div>
        </main> 
      </MyTemplate>
    </>
  )
}

export default Home;
