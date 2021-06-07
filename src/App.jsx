import React, { useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import logoWithoutBorder from './assets/images/logoWithoutBorder.png';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {

  useEffect(() => {
    // Night Sky element
    const element = document.getElementById('star-container');
    const length = Math.ceil(generateRandomNumber(10, 100));
    for (let index = 0; index < length; index++) {
        element.append(generateStar(element));
    }

    document.documentElement.style.overflowX = "hidden";

  }, [])

  const generateRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  const generateStar = (container) => {
    const star = document.createElement("div");
    star.classList.add("star");

    // Gen star coordinates relative to element size
    let x = generateRandomNumber(1, container.offsetWidth);
    let y = generateRandomNumber(1, container.offsetHeight);

    const { style } = star;

    style.left = Math.floor(x) + "px";
    style.top = Math.floor(y) + "px";

    style.setProperty(
        "--star-size",
        generateRandomNumber(1, 3) + "px"
    );

    style.setProperty(
        "--twinkle-duration",
        Math.ceil(generateRandomNumber(0, 5)) + "s"
    );

    style.setProperty(
        "--twinkle-delay",
        Math.ceil(generateRandomNumber(0, 5)) + "s"
    );

    return star;
  }

  return (
    <div className="App font-sans w-full min-h-screen overflow-x-hidden bg-gradient-to-t from-my-blue-light to-my-blue-dark text-my-white-text">
      <div className="absolute top-0 left-0 h-4/6 w-full" id="star-container">
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          {/*
          <Route exact path="/contact" component={Contact} />*/}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
