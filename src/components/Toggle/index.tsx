import React from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => (
   <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
         checked
         onChange={(_) => console.log("Hello")}
         uncheckedIcon={false}
         checkedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
   </Container>
);

export default Toggle;
