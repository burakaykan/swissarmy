import React from "react";
import { Row, Col } from "antd";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  let cardInfo = [
    {
      id: 1,
      alt: "alt",
      title: "Coolors",
      desc: "The super fast color schemes generator!",
      url: "https://coolors.co/"
    },
    {
      id: 2,
      alt: "alt",
      title: "BUNDLEPHOBIA",
      desc: "find the cost of adding a npm package to your bundle",
      url: "https://bundlephobia.com/"
    },
    {
      id: 3,
      alt: "alt",
      title: "Releasly",
      desc: "Be notified on new open-source version releases directly to your e-mail.",
      url: "https://www.releasly.co/"
    },
    {
      id: 4,
      alt: "alt",
      title: "carbon",
      desc: "Create and share beautiful images of your source code. Start typing or drop a file into the text area to get started.",
      url: "https://carbon.now.sh/"
    },
    {
      id: 5,
      alt: "alt",
      title: "snippet generator",
      desc: "Snippet generator is a tiny React app to help you create Visual Studio Code, Sublime Text and Atom snippets.",
      url: "https://snippet-generator.app/"
    },
    {
      id: 6,
      alt: "alt",
      title: "Rico's cheatsheets",
      desc: "Devhints — TL;DR for developer documentation",
      url: "https://devhints.io/"
    },
    {
      id: 2,
      alt: "alt",
      title: "BUNDLEPHOBIA",
      desc: "find the cost of adding a npm package to your bundle",
      url: "https://bundlephobia.com/"
    },
    {
      id: 2,
      alt: "alt",
      title: "BUNDLEPHOBIA",
      desc: "find the cost of adding a npm package to your bundle",
      url: "https://bundlephobia.com/"
    },
    {
      id: 2,
      alt: "alt",
      title: "BUNDLEPHOBIA",
      desc: "find the cost of adding a npm package to your bundle",
      url: "https://bundlephobia.com/"
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
