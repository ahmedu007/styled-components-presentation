import React from "react";

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  S,
  Notes,
  Text,
  Fit,
} from "spectacle";
import styled, { ThemeProvider } from "styled-components";
// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";

import Interactive from "../assets/interactive";
import LiveEdit from "./LiveEdit";

const images = {
  formidagon: require("../assets/formidable-logo.svg"),
  goodWork: require("../assets/good-work.gif"),
  addCSS: require("../assets/addCSS.jpg"),
  firstLook: require("../assets/codeExamples/carbon.svg"),
  max: require("../assets/maxStobier.jpg"),
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#CECECE",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "white",
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide
          transition={["zoom"]}
          bgColor="secondary"
          textColor="primary"
          align="flex-end center"
        >
          <Heading size={1} fit caps lineHeight={1} textColor="primary" align="flex-start">
            Theming with Styled Components
          </Heading>
          <BlockQuote>
            <Quote margin="10px 0 0" textColor="tertiary" bold textSize="30">
              Umair Ahmed
              <br />
              @umair170
              <br />
              Product Developer, AND Digital
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="60">
              When you code CSS, you are writing abstract rules to take unknown content and organize
              it in an unknown medium.
            </Quote>
            <Cite margin="10px 0 0 30px">Author (Unknown)</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <List>
            <Heading textColor="primary" size={4}>
              What is CSS-in-JS?
            </Heading>

            <Appear>
              <Heading textColor="primary" size={4}>
                Which problems does it solve?
              </Heading>
            </Appear>

            <Appear>
              <Heading textColor="primary" size={4}>
                What does it bring to the table?
              </Heading>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide", "fade"]} bgColor="secondary" textColor="primary">
          <Image src={images.addCSS} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Heading textColor="primary" size={2}>
            What is CSS-in-JS? and Why?
          </Heading>

          <List>
            <Appear>
              <Text textColor="primary" textSize="28" margin="0 0 20px 0">
                Web development has changed. CSS was originally designed for styling documents, with
                the web as a mere document reader. We’ve now re-purposed the web with components at
                the core.
              </Text>
            </Appear>

            <Appear>
              <Text textColor="primary" textSize="28">
                CSS just wasn’t built with component-based development in mind, but there’s a
                solution! Combining the best parts of CSS, components, and JavaScript together, CSS
                in JS unifies these two separate methodologies, letting you write your CSS directly
                in your JavaScript files. That means you can have your CSS interact directly on the
                component level.
              </Text>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Text bold size={6} textColor="primary">
            Keep in mind Inline styles and CSS-in-JS are not the same! They’re different — Quick
            demonstration time!
          </Text>

          <Layout>
            <Fill>
              <CodePane
                source={require("../assets/codeExamples/inline.example").default}
                lang="js"
              />
            </Fill>

            <Fill>
              <CodePane
                source={require("../assets/codeExamples/cssinjs.example").default}
                lang="js"
              />
            </Fill>
          </Layout>

          <Text textColor="primary">This gets rendered to the DOM as</Text>

          <Appear>
            <div>
              <Layout>
                <Fill>
                  <CodePane
                    source={require("../assets/codeExamples/inline-dom.example").default}
                    lang="js"
                    width="20px"
                    style={{
                      backgroundColor: "red",
                    }}
                  />
                </Fill>

                <Fill>
                  <CodePane
                    source={require("../assets/codeExamples/cssinjs-dom.example").default}
                    lang="js"
                  />
                </Fill>
              </Layout>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Text size={6} textColor="primary">
            What Does CSS-in-JS Look Like?
          </Text>
          <Appear>
            <Image src={images.firstLook} />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading textColor="primary" size={4}>
            Why not just use CSS and CSS Modules?
          </Heading>

          <List>
            <Layout>
              <Appear>
                <div>
                  <Text textColor="primary">CSS is great</Text>
                  <Text textColor="primary">Media Queries</Text>
                  <Text textColor="primary">Hover / active / other states</Text>
                  <Text textColor="primary">Nesting</Text>
                  <Text textColor="primary">Animations</Text>
                  <Text textColor="primary">etc..</Text>
                </div>
              </Appear>

              <Appear>
                <div>
                  <Text textColor="primary">CSS is not so great</Text>
                  <Text textColor="primary">Scoping</Text>
                  <Text textColor="primary">Collocation / Isolation</Text>
                  <Text textColor="primary">Theming</Text>
                  <Text textColor="primary">etc..</Text>
                </div>
              </Appear>
            </Layout>
          </List>

          <Notes>Difficult to delete styles. Inheritance vs composition</Notes>
        </Slide>

        <Slide transition={["fade", "spin", "zoom"]} bgColor="secondary" textColor="primary">
          <Image src={images.max} width={500} style={{ transform: "rotate(90deg)" }} />
          <Text bold textColor="primary" margin="100px 0 0 0">
            Max Stoiber @mxstbr
          </Text>
          <Text textColor="primary">Creator of Styled Components</Text>
          <Text textColor="primary">Software engineer at GitHub</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="tertiary">
            CSS in JS (Styled Components)
          </Heading>

          <Appear>
            <List>
              <Text textColor="primary">Styles encapsulation</Text>
              <Text textColor="primary">Mapping between CSS and JS</Text>
              <Text textColor="primary">Dynamic styling</Text>
              <Text textColor="primary">Element Queries</Text>
              <Text textColor="primary">Full Theming support</Text>
              <Text textColor="primary">Huge ecosystem (Awesome Styled Components)</Text>
              <Text textColor="primary">Easier deletion of CSS</Text>
              <Text textColor="primary">Existing JS tools like dead code elimination</Text>
              <Text textColor="primary">etc..</Text>
            </List>
          </Appear>

          <Notes>
            <List>
              <ListItem>You are defining your Styles in the same file</ListItem>
              <ListItem>Let User decide a background color from a picker etc</ListItem>
              <ListItem>
                Element queries are the width of the element rather than just media queries which
                work on the users viewport.
              </ListItem>
              <ListItem>How many people have deleted JS files or code but not CSS</ListItem>
            </List>
          </Notes>
        </Slide>

        <CodeSlide
          transition={["zoom", "spin"]}
          lang="js"
          code={require("../assets/intro.example").default}
          bgColor="secondary"
          textColor="primary"
          color="primary"
          ranges={[
            { loc: [0, 8], title: "Walking through a styled Component" },
            { loc: [0, 1], title: "Import the module" },
            {
              loc: [2, 3],
              title: "Define a const",
              note: "Notice the var is upperCase for React Components",
            },
            { loc: [2, 3], note: "We use this weird syntax. It will be covered next" },
            { loc: [3, 4] },
            { loc: [4, 5] },
            { loc: [7, 8], note: "And we render the component as any React Component" },
          ]}
        />

        <Slide transition={["fade", "slide"]} bgColor="secondary" textColor="primary">
          <Heading textColor="primary" size={5}>
            What is that weird `` thing?!
          </Heading>
          <Heading textColor="primary" size={4}>
            Tagged Template Literals
          </Heading>

          <Appear>
            <Text textColor="primary" textSize="28" margin="20px 0 20px 0" textAlign="left">
              Tagged Template Literals are a new feature in ES6. They let you define custom string
              interpolation rules, which is how styled components are created.
            </Text>
          </Appear>

          <Appear>
            <Text textColor="primary" textSize="28" margin="20px 0 20px 0" textAlign="left">
              If you pass no interpolations, the first argument your function receives is an array
              with a string in it.
            </Text>
          </Appear>

          <Notes>
            <List>
              <ListItem>
                Instead of putting parantheses you can call a function with backticks too.
              </ListItem>
              <ListItem>
                The only major difference is the arguments are supplied in an array rather than just
                args
              </ListItem>
            </List>
          </Notes>
        </Slide>

        <CodeSlide
          transition={["zoom", "spin"]}
          lang="js"
          code={require("../assets/codeExamples/advanced.example").default}
          bgColor="secondary"
          textColor="primary"
          color="primary"
          ranges={[
            { loc: [0, 17], title: "More advanced example" },
            { loc: [0, 1], title: "Import the module" },
            {
              loc: [2, 3],
              title: "Define a const",
            },
            { loc: [5, 11], note: "Now we are defining some Psudo selectors" },
            { loc: [12, 16], note: "Also some Media queries" },
            { loc: [2, 17] },
          ]}
        />

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <LiveEdit
            noInline
            scope={{ styled, ThemeProvider }}
            code={require("../assets/codeExamples/LiveDemo.example").default}
          />

          <Notes>
            <List>
              <ListItem>Extract it to a function</ListItem>

              <ListItem>Do all the complex calculations you want.</ListItem>
              <ListItem>Even decide a background based on time of the day</ListItem>
              <ListItem>Imagination is the only constraint</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              “The most important property of a program is whether it accomplishes the intention of
              its user.”
            </Quote>
            <Cite margin="10px 0 0 30px">C.A.R. Hoare</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <Heading>Questions?</Heading>
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
