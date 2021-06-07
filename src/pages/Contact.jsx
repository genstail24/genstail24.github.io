import React from 'react';
import Profile from './../assets/images/profile.png';
import MyTemplate from './../components/MyTemplate'

const Contact = () => {
  return (
    <>
      <MyTemplate>
        <main className="mt-24 px-16 sm:px-36 md:px-48 lg:px-16 flex flex-col items-center relative z-30 text-my-white">
          <h1 className="text-5xl semibold">
            <span className="text-my-blue-light border-b-4 border-my-blue-light font-semibold">Contact</span> 
            &nbsp;me
          </h1>
          <div className="mt-4 py-8 flex flex-col w-full lg:flex-row lg:justify-center ">
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl text-my-white text-center lg:text-left">Detail Information</h2>
              <div className="mt-4 mb-2">
                <p className="text-my-blue-light text-lg flex items-center">
                  <span className="inline-block h-5 w-5 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <defs />
                      <title>mobile-phone-2</title>
                      <line className="a" x1="18.5" y1="19.5" x2="5.5" y2="19.5" />
                      <path d="M12,20.75a.75.75,0,1,0,.75.75.749.749,0,0,0-.75-.75Z" />
                      <rect className="a" x="5.5" y="0.5" width={13} height={23} rx={2} ry={2} />
                    </svg>
                  </span>
                  Phone
                </p>
                <a href="#" className="text-my-white text-2xl transition hover:text-my-blue-dark">+62 821 364 181</a>
              </div>
              <div className="mt-4 mb-2">
                <p className="text-my-blue-light text-lg flex items-center">
                  <span className="inline-block h-5 w-5 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                    </svg>
                  </span>
                  Intagram
                </p>
                <a href="#" className="text-my-white text-2xl transition hover:text-my-blue-dark">gentaathoriq</a>
              </div>
              <div className="mt-4 mb-2 pr-5">
                <p className="text-my-blue-light text-lg flex items-center">
                  <span className="inline-block h-5 w-5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  Gmail
                </p>
                <a href="#" className="text-my-white break-words text-2xl transition hover:text-my-blue-dark">muhammadgentaaththarriq@gmail.com</a>
              </div>
              <div className="mt-4 mb-2">
                <div className="text-my-blue-light text-lg flex items-center">
                  <span className="inline-block h-5 w-5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </span>
                  Github
                </div>
                <a href="#" className="text-my-white break-words text-2xl transition hover:text-my-blue-dark">Genstail24</a>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl text-my-white text-center lg:text-left">Get in Touch</h2>
              <input type="text" name="message" placeholder="Enter your email here" className="w-full rounded rounded-xl text-my-blue-dark focus:outline-none px-4 py-2 mt-4" />
              <textarea type="text" name="message" placeholder="Enter your message here" className="w-full rounded rounded-xl text-my-blue-dark focus:outline-none px-4 py-2 mt-4" defaultValue={""} />               
              <button type="button" className="my-button mt-2 focus:outline-none">Submit</button>
            </div>
          </div>
        </main>

      </MyTemplate>
    </>
  )
}

export default Contact;
