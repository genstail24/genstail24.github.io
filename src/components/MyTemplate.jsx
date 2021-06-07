import React from 'react';
import { NavLink } from 'react-router-dom';
import logoWithoutBorder from './../assets/images/logoWithoutBorder.png';

const MyTemplate = (props) => {

  const handleOpenMenu = () => {
      window.scrollTo(0, 0);
      document.documentElement.style.overflowY = "hidden";
      document.getElementById('hamburger').classList.add('hidden')
      document.getElementById('nav').classList.remove('hidden')
      document.getElementById('close').classList.remove('hidden')
  }
  
  const handleCloseMenu = () => {
      document.documentElement.style.overflowY = "auto";
      document.getElementById('hamburger').classList.remove('hidden')
      document.getElementById('nav').classList.add('hidden')
      document.getElementById('close').classList.add('hidden')
  }

  const setOverFlow = () => {
      document.documentElement.style.overflowY = "auto";
  }

  return (
    <>
      <header className="fixed z-40 w-full top-0 left-0">
        <div className="px-4 pt-4 md:px-16 md:pt-8 w-full flex items-center justify-between">
          <button className="flex items-center justify-center flex-wrap ml-4 mt-4 md:mt-0 md:ml-0 focus:outline-none">
            <img src={logoWithoutBorder} className="h-24 md:h-36" />
          </button>
          <button type="button" onClick={handleOpenMenu} id="hamburger" className="text-my-blue-light transition focus:outline-none md:hidden focus:outline-none">
            <svg className="fill-current h-20 w-24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <button to="#" onClick={handleCloseMenu} className="absolute hidden top-0 right-0 flex justify-center items-center text-my-blue-light m-4 font-bold md:hidden z-50 focus:outline-none" id="close">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="fill-current h-24 w-24 feather feather-x"  
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          {/* <nav class="absolute z-50 top-0 left-0 flex flex-col  justify-center items-center w-screen h-screen bg-my-blue-dark text-my-white md:static md:bg-transparent" id="nav"> */}
          <nav className="absolute h-screen w-full flex flex-col justify-center items-center bg-my-blue-dark top-0 left-0 z-30 text-gray-100 h-full w-full md:static md:flex md:items-end md:content-center md:h-auto md:w-auto md:text-center md:bg-transparent transition hidden" id="nav">
            <NavLink to="/" exact={true} onClick={setOverFlow} className="p-2 mb-2 text-2xl transition rounded-lg text-my-blue-light hover:text-my-white active:bg-my-blue-light active:text-my-white">Home</NavLink>
            <NavLink to="/about" onClick={setOverFlow} className="p-2 mb-2 text-2xl transition rounded-lg text-my-blue-light hover:text-my-white active:bg-my-blue-light active:text-my-white">About</NavLink>
            <NavLink to="/projects" onClick={setOverFlow} className="p-2 mb-2 text-2xl transition rounded-lg text-my-blue-light hover:text-my-white active:bg-my-blue-light active:text-my-white">Projects</NavLink>
            <NavLink to="/contact" onClick={setOverFlow} className="p-2 mb-2 text-2xl transition rounded-lg text-my-blue-light hover:text-my-white active:bg-my-blue-light active:text-my-white">Contact</NavLink>
          </nav>
        </div>
      </header>
      {props.children}
      <footer className="w-full bg-transparent border-none pt-4 px-4 overflow-hidden">
        <div className="w-full h-full flex justify-center mx-auto ">
          <a href="mailto:muhammadgentaaththarriq@gmail.com" target="_blank" className="w-20 h-20 flex justify-center items-center bg-my-white text-my-blue-light rounded-3xl text-gray-100 mx-2 text-my-blue-light my-footer-card overflow-hidden hover:text-my-white">
            <svg className="fill-current w-8" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
              <g>
                <g>
                  <path d="M479.536,58.794H32.464C14.564,58.794,0,73.358,0,91.258v329.483c0,17.9,14.564,32.464,32.464,32.464h447.072
                             c17.9,0,32.464-14.564,32.464-32.464V91.258C512,73.358,497.436,58.794,479.536,58.794z M437.867,77.167L256,209.723
                             L74.133,77.167H437.867z M57.569,434.832H32.464c-7.769,0-14.091-6.322-14.091-14.091V135.199l39.196,28.569V434.832z
                              M436.057,434.832H75.943V177.161L250.59,304.457c1.611,1.175,3.51,1.763,5.41,1.763c1.9,0,3.8-0.588,5.41-1.763l174.647-127.297
                             V434.832z M493.627,420.741c0,7.769-6.322,14.091-14.091,14.091h-25.105V163.768l39.196-28.569V420.741z M493.627,112.464
                             L256,285.665L18.373,112.464V91.258c0-7.769,6.322-14.091,14.091-14.091h10.476L250.59,228.515c1.612,1.175,3.51,1.763,5.41,1.763
                             c1.9,0,3.798-0.588,5.41-1.763L469.059,77.167h10.476c7.769,0,14.091,6.322,14.091,14.091V112.464z" />
                </g>
              </g>
            </svg>
          </a>
          <a href="https://www.github.com/genstail24" target="_blank" className="w-20 h-20 flex justify-center items-center bg-my-white text-my-blue-light rounded-3xl text-gray-100 mx-2 text-my-blue-light my-footer-card overflow-hidden hover:text-my-white">
            <svg className="fill-current w-8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 438.549 438.549" xmlSpace="preserve">
              <g>
                <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
                         c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
                         c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
                         c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
                         c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
                         c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
                         c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
                         c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
                         c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
                         c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
                         c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
                         c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
                         c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
                         c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
                         c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
                         c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
                         c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
                         c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
                         c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
                         C438.536,184.851,428.728,148.168,409.132,114.573z" />
              </g>
            </svg>
          </a>
          <a href="https://www.instagram.com/gentaathoriq" target="_blank" className="w-20 h-20 flex justify-center items-center bg-my-white text-my-blue-light rounded-3xl text-gray-100 mx-2 text-my-blue-light my-footer-card overflow-hidden hover:text-my-white">
            <svg className="fill-current w-8" viewBox="0 0 511 511.9" xmlns="http://www.w3.org/2000/svg">
              <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" />
              <path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" />
              <path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" />
            </svg>
          </a> 
        </div>
        <div className="text-my-white text-sm mt-1 text-center">
          ©2021 Genstail24 All right Reserved
        </div>
      </footer>
    </>
  )
}

export default MyTemplate;
