import React from "react";
import { Slide, Heading, Text, Appear, List, ListItem } from "spectacle";

const Introduction = () => {
  return (
    <Slide bgColor="quaternary">
      <Heading size={2}>What is CSS-in-JS?</Heading>
      <List>
        <Appear>
          <ListItem>JSS is a more powerful abstraction over CSS.</ListItem>
        </Appear>

        <Appear>
          <ListItem>
            It uses JavaScript as a language to describe styles in a declarative and maintainable
            way.
          </ListItem>
        </Appear>

        <Appear>
          <ListItem>
            It is a high performance JS to CSS compiler which works at runtime and server-side.
          </ListItem>
        </Appear>
        {/* <Appear>
    
  </Appear>
  <Appear>
    
  </Appear>

  <Text>
    This core library is low level and framework agnostic. It is about 6KB (minified and
    gzipped) and is extensible via plugins API. — source Keep in mind Inline styles and
    CSS-in-JS are not the same! They’re different — Quick demonstration time!
  </Text> */}
      </List>
    </Slide>
  );
};

export default Introduction;
