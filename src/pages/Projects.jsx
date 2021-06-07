import React from 'react';
import logo from './../assets/images/logo.png';
import MyTemplate from './../components/MyTemplate'

const Projects = () => {
  return (
    <>
      <MyTemplate>
          <main className="mt-24 md:mb-24 flex flex-col items-center relative z-30 text-my-white">
          <h1 className="text-5xl semibold">
            my&nbsp;
            <span className="text-my-blue-light border-b-4 border-my-blue-light">Projects</span>
          </h1>
          <div className="mt-4 py-8 px-4 flex flex-row flex-wrap md:flex-row items-center overflow-hidden">
            {/* card container */}
            <div className="shadow-2xl px-2 pb-2 mb-4 rounded rounded-l shadow-2xl w-full md:w-1/2">
              <div className="h-48 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden" style={{backgroundImage: 'url("https://unsplash.it/804/800")'}}>
              </div>
              {/* card-content */}
              <div className="px-6 py-4">
                <h2 className="mb-2 font-black">Sabrina The Game</h2>
                <p className="mb-4 text-grey-dark text-sm">
                  This is the first game i made. The game has no audio, randomly sprite, and looks like a trash, but everything start from the ground.
                </p>
                {/* button */}
                <button className="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
                  Download me
                </button>
              </div>
            </div>
            {/* card container */}
            <div className="shadow-2xl px-2 pb-2 mb-4 rounded rounded-l shadow-2xl w-full md:w-1/2">
              <div className="h-48 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden" style={{backgroundImage: 'url("https://unsplash.it/804/800")'}}>
              </div>
              {/* card-content */}
              <div className="px-6 py-4">
                <h2 className="mb-2 font-black">Sabrina The Game</h2>
                <p className="mb-4 text-grey-dark text-sm">
                  This is the first game i made. The game has no audio, randomly sprite, and looks like a trash, but everything start from the ground.
                </p>
                {/* button */}
                <button className="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
                  Download me
                </button>
              </div>
            </div>
            {/* card container */}
            <div className="shadow-2xl px-2 pb-2 mb-4 rounded rounded-l shadow-2xl w-full md:w-1/2">
              <div className="h-48 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden" style={{backgroundImage: 'url("https://unsplash.it/804/800")'}}>
              </div>
              {/* card-content */}
              <div className="px-6 py-4">
                <h2 className="mb-2 font-black">Sabrina The Game</h2>
                <p className="mb-4 text-grey-dark text-sm">
                  This is the first game i made. The game has no audio, randomly sprite, and looks like a trash, but everything start from the ground.
                </p>
                {/* button */}
                <button className="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
                  Download me
                </button>
              </div>
            </div>
            <div className="shadow-2xl px-2 pb-2 mb-4 rounded rounded-l shadow-2xl w-full md:w-1/2">
              <div className="h-48 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden" style={{backgroundImage: 'url("https://unsplash.it/804/800")'}}>
              </div>
              {/* card-content */}
              <div className="px-6 py-4">
                <h2 className="mb-2 font-black">Sabrina The Game</h2>
                <p className="mb-4 text-grey-dark text-sm">
                  This is the first game i made. The game has no audio, randomly sprite, and looks like a trash, but everything start from the ground.
                </p>
                {/* button */}
                <button className="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
                  Download me
                </button>
              </div>
            </div>
          </div>
        </main>

      </MyTemplate>
    </>
  )
}

export default Projects;
