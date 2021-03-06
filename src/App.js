import React from "react";
import { Row, Col } from "antd";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import "./App.css";
import Card from "./components/card/Card";



function App() {

  var myArray = [
    "Code",
    "Programming",
    "Developer",
    "Java",
    "JavaScript"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  let cardInfo = [
    {
      id: 1,
      alt: "alt",
      title: "Coolors",
      desc: "The super fast color schemes generator!",
      url: "https://coolors.co/",
      src: "https://source.unsplash.com/450x250/?"+myArray[Math.floor(Math.random()*myArray.length)],
    },
    {
      id: 2,
      alt: "alt",
      title: "BUNDLEPHOBIA",
      desc: "find the cost of adding a npm package to your bundle",
      url: "https://bundlephobia.com/",
      src: "https://source.unsplash.com/450x250/?"+myArray[Math.floor(Math.random()*myArray.length)]
    },
    {
      id: 3,
      alt: "alt",
      title: "Releasly",
      desc: "Be notified on new open-source version releases directly to your e-mail.",
      url: "https://www.releasly.co/",
      src: "https://source.unsplash.com/450x250/?"+myArray[Math.floor(Math.random()*myArray.length)]
    },
    {
      id: 4,
      alt: "alt",
      title: "carbon",
      desc: "Create and share beautiful images of your source code. Start typing or drop a file into the text area to get started.",
      url: "https://carbon.now.sh/",
      src: "https://source.unsplash.com/450x250/?"+myArray[Math.floor(Math.random()*myArray.length)]
    },
    {
      id: 5,
      alt: "alt",
      title: "snippet generator",
      desc: "Snippet generator is a tiny React app to help you create Visual Studio Code, Sublime Text and Atom snippets.",
      url: "https://snippet-generator.app/",
      src: "https://source.unsplash.com/450x250/?"+myArray[Math.floor(Math.random()*myArray.length)]
    },
    {
      id: 6,
      alt: "alt",
      title: "Rico's cheatsheets",
      desc: "Devhints — TL;DR for developer documentation",
      url: "https://devhints.io/",
      src: "https://source.unsplash.com/450x250/?"+myArray[Math.floor(Math.random()*myArray.length)]
    },
    {
      id: 2,
      alt: "alt",
      title: "BUNDLEPHOBIA",
      desc: "find the cost of adding a npm package to your bundle",
      url: "https://bundlephobia.com/",
      src: "https://source.unsplash.com/450x250/?"+myArray[Math.floor(Math.random()*myArray.length)]
    },
    {
      id: 2,
      alt: "alt",
      title: "BUNDLEPHOBIA",
      desc: "find the cost of adding a npm package to your bundle",
      url: "https://bundlephobia.com/",
      src: "https://source.unsplash.com/450x250/?"+myArray[Math.floor(Math.random()*myArray.length)]
    },
    {
      id: 2,
      alt: "alt",
      title: "BUNDLEPHOBIA",
      desc: "find the cost of adding a npm package to your bundle",
      url: "https://bundlephobia.com/",
      src: "https://source.unsplash.com/450x250/?"+myArray[Math.floor(Math.random()*myArray.length)]
    },
  ];
  return (
    <Row type="flex" justify="center" style={{ backgroundColor: "#fff" }}>
      {/* <Animate
        play
        start={{ opacity: 0.7, filter: "blur(0.5)" }}
        end={{ opacity: 1, filter: "blur(10px)" }}
      > */}
        {cardInfo.map(item => {
          return <Card key={item.id} cardInfo={item} />;
        })}
      {/* </Animate> */}
    </Row>
  );
}

export default App;
