import React from 'react';
import Profile from './../assets/images/profile.png';
import MyTemplate from './../components/MyTemplate'

const About = () => {
  return (
    <>
      <MyTemplate>
        <main className="mt-24 px-16 flex flex-col relative items-center z-30 text-my-white">
          <h1 className="text-5xl semibold">
            <span className="text-my-blue-light border-b-4 border-my-blue-light">About</span> 
            &nbsp;me
          </h1>
          <div className="mt-4 max-w-4xl py-8 flex flex-col items-center md:items-start md:flex-row md:w-full">
            <div className="flex justify-center md:w-1/3 items-center md:justify-end md:items-start">
              <img src={Profile} className="border-my-blue-light border-4 w-64" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-start items-start px-4">
              <p className="block text-md whitespace-pre-line" style={{whiteSpace: 'pre-line'}}>
                Hallo World! 
                <br></br>
                Let me introduce my self first. 
                I'm Genta; just call me Genta! I'm 19 years old.
                <br></br> 
                <br></br>
                I have an enthuisiasm to coding, programming, and stuff. I have been learning about programming since in Junior School. I am still improving and will always improve my skill.
                <br></br> 
                <br></br>
                I always use React JS as the Front End of my projects and laravel as the service. Even i rarely play games, i have a litle bit skill of Unity Engine. So, i can create simple games, such as 2d platformer, etc.
              </p>
              <div className="mt-2">
                <a href className="inline-block px-4 py-2 bg-my-blue-dark rounded-lg text-my-white uppercase text-xl transition hover:bg-my-white hover:text-my-blue-dark">Home</a>
                <a href className="inline-block px-4 py-2 bg-my-blue-dark rounded-lg text-my-white uppercase text-xl transition hover:bg-my-white hover:text-my-blue-dark ml-4">Hire me</a>
              </div>
            </div>
          </div>
        </main>
      </MyTemplate>
    </>
  )
}

export default About;
