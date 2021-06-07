import React from 'react';
import {NavLink} from 'react-router-dom';
import MyTemplate from './../components/MyTemplate';
import Logo from './../assets/images/logo.png';

const Projects = (props) => {
  const projects = () => {
    return  [
      {
        id: 1,
        name: 'Sabrina the Game',
        description: ' This is the first game i made. The game has no audio, randomly sprite, and looks like a trash, but everything start from the ground.',
        action: 'Download me',
        to: '#',
        image: Logo
      },
      {
        id: 2,
        name: 'Match the Shape',
        description: 'This is the second game i made. This has a litle bit improvement than the first one, but maybe because I created it with less effort, it still need magic touch.',
        action: 'Visit me',
        to: `https://genstail24.itch.io/match-the-shape`,
        image: Logo
      },
      {
        id: 3,
        name: 'Management',
        description: 'This is the website that i handle in my Internship. It was developed using React JS and Lumen for API.',
        action: 'Visit me',
        to: `https://pm.smooets.com`,
        image: Logo
      },
      {
        id: 4,
        name: 'Tuition Fee School',
        description: 'This one i made for final exam in Vocational Higschool. Using Laravel with react scaffolding.',
        action: 'Visit me',
        to: `http://genstail24-my-staging.herokuapp.com/`,
        image: Logo
      },
      {
        id: 5,
        name: 'Whatsapp Client Bot',
        description: 'This bot was made using <a className="text-my-blue-dark text-red-900" href="https://github.com/pedroslopez/whatsapp-web.js/"target="_blank">Whatsapp-web.js</a> by Perdoloopez.',
        action: 'Visit me',
        to: `https://github.com/genstail24/node-whatsapp-bot`,
        image: Logo
      }
    ];
  }

  const getURL = (text) => {
    return text.toLowerCase().replace(/\s/g, '-');
  }


  return (
    <>
      <MyTemplate>
          <main className="pt-32 flex flex-col items-center relative z-30 text-my-white">
          <h1 className="text-5xl semibold">
            my&nbsp;
            <span className="text-my-blue-light border-b-4 border-my-blue-light">Projects</span>
          </h1>
          <div className="py-8 px-4 md:px-16 flex flex-row flex-wrap md:flex-row items-center overflow-hidden">

            <div className="container mx-auto px-4 md:px-12 text-my-white">
              <div className="flex flex-wrap -mx-1 lg:-mx-4">
                  {
                  projects().map((project, index) => (
                  <div key={project.id.toString()} className="my-2 px-1 w-full shadow-2xl md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      {/*<!-- Article -->*/}
                      <article className="overflow-hidden rounded-lg">
                          <img alt={project.name} title={project.name} className="block h-auto w-full" src={project.image || ''} />
                          <header className="flex flex-col leading-tight p-2 md:p-4">
                              <h2 className="mb-2 text-lg font-bold">
                                  <NavLink to={`/project/${getURL(project.name)}`}>
                                      {project.name || ''}
                                  </NavLink>
                              </h2>
                              <p className="mb-4 text-grey-dark text-sm">
                                <span
                                dangerouslySetInnerHTML={{
                                  __html: (project.description || '')
                                }}></span>
                              </p>
                          </header>

                          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                              <a href={project.to || ''} target="_blank" className="flex items-center no-underline hover:underline hover:bg-purple-light text-white font-black rounded-full mt-1 mb-2" >
                                   {project.action || ''}
                              </a>
                          </footer>
                      </article>
                      {/*<!-- END Article -->*/}
                  </div>
                    ))
                  }
              </div>
            </div>

          </div>
        </main>

      </MyTemplate>
    </>
  )
}

export default Projects;