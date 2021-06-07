import React from 'react';
import {NavLink} from 'react-router-dom';
import MyTemplate from './../components/MyTemplate'

const NotFound = () => {
  return (
    <>
      <MyTemplate
        pageMeta={{
          title: '404 Page Not Found',
          keywords: ['genstail24', 'muhammad genta ath tharriq', 'curlyBrackets', 'NotFound genta', 'NotFound']
        }}
      >
        <main className="min-h-screen flex flex-col h-full items-center justify-center relative z-30 text-my-white">
          <h1 className="text-4xl">
            404!
          </h1>
          <h2 className="text-2xl text-center px-1">
              The page is not here.&nbsp; 
              <span  className="text-my-blue-light border-b-4 border-my-blue-light hover:text-my-blue-dark hover:border-my-blue-dark">
                <NavLink to="/" exact={true}>Go Away</NavLink>
              </span>
              &nbsp;or come back later!
          </h2>
        </main>
      </MyTemplate>
    </>
  )
}

export default NotFound;
