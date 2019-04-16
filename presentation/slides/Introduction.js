import React from "react";
import { Heading, Slide, Text } from "spectacle";

const Introduction = props => {
  return (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Spectacle Boilerplate
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" fit bold>
        open the presentation/index.js file to get started
      </Text>
    </Slide>
  );
};

export default Introduction;
