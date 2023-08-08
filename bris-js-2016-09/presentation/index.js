// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  deps: require("../assets/deps.png"),
  helloworld: require("../assets/helloworld.png"),
  jsfatigue: require("../assets/jsfatigue.png"),
  reactconfexperience: require("../assets/reactconfexperience.jpg")
};

preloader(images);

const background = "#5A5475";
const contrast = "#FFF352";
const altColor = "#C5A3FF";
const white = "#F8F8F2";

const theme = createTheme({
  primary: background,  // Default background
  secondary: white,     // Default font
  tertiary: contrast,   // Default h1
  quarternary: altColor // Misc!
}, {
  tertiary: "Consolas, monospace" // Code font
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="none">
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps>
              nwb
            </Heading>
            <Heading size={2} fit caps>
              Quick React development
            </Heading>
            <Appear fid="1">
              <Heading size={2} fit caps textColor="quarternary">
                Zero configuration <S type="italic">until you need it</S>
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.helloworld.replace("/", "")} bgDarken={0.6}>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                kinda&hellip;
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.jsfatigue.replace("/", "")} bgDarken={0.6}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="tertiary">
                kinda&hellip;
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.deps.replace("/", "")} bgDarken={0.6}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="tertiary">
                this
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit caps>
              Build configuration as tooling
            </Heading>
            <Heading size={2} caps>
              (in general)
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Reduce configuration and dependency boilerplate</ListItem></Appear>
              <Appear>
                <ListItem>
                  Update your entire build setup just like any other npm module:
                  <List>
                    <ListItem>Bump the dependency number</ListItem>
                    <ListItem>Follow the release notes</ListItem>
                  </List>
                </ListItem>
              </Appear>
              <Appear><ListItem>Lower inertia when starting and maintaining projects</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit caps>
              React apps
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} caps textColor={background}>
              Default setup
            </Heading>
            <List>
              <Appear><ListItem>Webpack configured to handle JS, CSS, JSON, fonts and images</ListItem></Appear>
              <Appear><ListItem>Babel configured for ES2015 (loose mode), Stage 2 and <Code textColor={background}>@decorators</Code></ListItem></Appear>
              <Appear><ListItem>Polyfills for <Code textColor={background}>Promise</Code>, <Code textColor={background}>fetch()</Code> and <Code textColor={background}>Object.assign()</Code></ListItem></Appear>
              <Appear><ListItem>Hot Module Reloading development server</ListItem></Appear>
              <Appear><ListItem>Karma testing with Mocha and Expect</ListItem></Appear>
              <Appear><ListItem>Production build with determinstic filename hashes</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} caps textColor={background}>
              Configuration
            </Heading>
            <List>
              <Appear><ListItem>Tweak Webpack loader and plugin config using unique ids</ListItem></Appear>
              <Appear><ListItem>Tweak Babel config</ListItem></Appear>
              <Appear><ListItem>Configure different Karma frameworks and reporters</ListItem></Appear>
              <Appear>
                <ListItem>
                  Plugin modules for style preprocessors
                  <List>
                    <ListItem><Code textColor={background}>npm install nwb-sass</Code></ListItem>
                  </List>
                </ListItem>
              </Appear>
              <Appear><ListItem>Escape hatches for extra Webpack, Babel and Karma config</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit caps>
              Quick prototyping
            </Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Image src={images.reactconfexperience.replace("/", "")} margin="0px auto 40px" height="391px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} caps textColor={background}>
              react command
            </Heading>
            <List>
              <Appear><ListItem><Code textColor={background}>react run app.js</Code> - development server</ListItem></Appear>
              <Appear><ListItem><Code textColor={background}>react build app.js</Code> - production build</ListItem></Appear>
              <Appear><ListItem>Same base configuration for React apps, but with Babel Stage 0</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit caps>
              React components
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Develop against a demo app using the development server</ListItem></Appear>
              <Appear>
                <ListItem>
                  Build for npm:
                  <List>
                    <ListItem>ES5</ListItem>
                    <ListItem>ES6 modules</ListItem>
                    <ListItem>UMD build</ListItem>
                  </List>
                </ListItem>
              </Appear>
              <Appear><ListItem><Code textColor={background}>propTypes</Code> wrapped in an environment check</ListItem></Appear>
              <Appear><ListItem>Testing preconfigured for code coverage and Travis CI</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Link href="https://github.com/insin/nwb">
              <Text bold textColor={background}>View on Github</Text>
            </Link>
            <Code textColor={background}>npm install -g nwb</Code>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
