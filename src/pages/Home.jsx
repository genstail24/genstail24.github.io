import React from 'react';
import {NavLink} from 'react-router-dom';
import logoWithoutBorder from './../assets/images/logoWithoutBorder.png';
import MyTemplate from './../components/MyTemplate'

const Home = () => {
  return (
    <>
      <MyTemplate
        pageMeta={{
          title: 'Home',
          keywords: ['genstail24', 'muhammad genta ath tharriq', 'gentaathoriq', 'curlyBrackets', 'home genta', 'home']
        }}
      >
        <main className="pt-32 px-4 flex flex-col items-center relative z-20 ">
          <img src={logoWithoutBorder} tite="logo genstail24" alt="genstail24" className="h-64" />
          <h1 className="text-center text-gray-100 mb-2 text-2xl sm:text-4xl">
            <span className="text-my-blue-light border-b-4 border-my-blue-light">
              Hello World!</span> I'm Genta</h1>
          <h3 className="text-gray-100 text-lg text-center sm:text-2xl mb-6">Back End Developer | Game Developer | Dreamer </h3>
          <div className="flex justify-center">
            <NavLink to="/about" className="inline-block px-4 py-2 bg-my-blue-dark rounded-lg text-my-white uppercase text-xl transition hover:bg-my-white hover:text-my-blue-dark mx-2">About me</NavLink>
            <NavLink to="/projects" className="inline-block px-4 py-2 bg-my-blue-dark rounded-lg text-my-white uppercase text-xl transition hover:bg-my-white hover:text-my-blue-dark mx-2">my Projects</NavLink>
          </div>
        </main> 
      </MyTemplate>
    </>
  )
}

export default Home;
