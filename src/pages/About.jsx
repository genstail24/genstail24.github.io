import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import Profile from './../assets/images/profile.png';
import MyTemplate from './../components/MyTemplate'

const About = () => {
  const [age, setAge] = useState(null)

  useEffect(() => {
    const birthDay = new Date('24 may 2002');
    const today = new Date();
    const age = today.getYear() - birthDay.getYear();
    setAge(prev => age)
  }, [])
  
  return (
    <>
      <MyTemplate
        pageMeta={{
          title: 'About',
          keywords: ['genstail24', 'muhammad genta ath tharriq', 'curlyBrackets', 'about genta', 'about']
        }}
      >
        <main className="pt-32 px-8 md:px-16 flex flex-col relative items-center z-30 text-my-white">
          <h1 className="text-5xl semibold">
            <span className="text-my-blue-light border-b-4 border-my-blue-light">About</span> 
            &nbsp;me
          </h1>
          <div className="max-w-4xl py-8 flex flex-col items-center md:items-start md:flex-row md:w-full">
            <div className="flex justify-center md:w-1/3 items-center md:justify-end md:items-start">
              <img src={Profile} alt="genstail24" title="muhammad genta ath tharriq" className="border-my-blue-light border-4 w-64" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-start items-start md:px-4">
              <p className="block text-md whitespace-pre-line" style={{whiteSpace: 'pre-line'}}>
                Hello World! 
                <br></br>
                Let me introduce my self first, 
                <br></br>
                I'm Genta. My full name is Muhammad Genta Ath Tharriq. I'm {age || ''} years old.
                <br></br>
                <br></br>
                I have a highly enthusiasm for coding, programming, and stuff. I have been studying about programming since I was in Junior Highschool. Even so, I am still improving and will always improve my skills.
                <br></br>
                <br></br>
                I always use React JS as the Front End and Laravel as the Back End of all my projects. Although I rarely play games, I also have a litle bit skills of Unity Engine. So, I can make simple games like 2d platformer, etc.
              </p>
              <div className="mt-2">
                <NavLink to="/" exact={true} className="inline-block px-4 py-2 bg-my-blue-dark rounded-lg text-my-white uppercase text-xl transition hover:bg-my-white hover:text-my-blue-dark">Home</NavLink>
                <NavLink to="contact" className="inline-block px-4 py-2 bg-my-blue-dark rounded-lg text-my-white uppercase text-xl transition hover:bg-my-white hover:text-my-blue-dark ml-4">Hire me</NavLink>
              </div>
            </div>
          </div>
        </main>
      </MyTemplate>
    </>
  )
}

export default About;
