import React from "react";

import { Grid } from "./styles";

import MainHeader from "../MainHeader";
import Content from "../Content";
import Aside from "../Aside";

const Layout: React.FC = () => {
   return (
      <Grid>
         <MainHeader />
         <Content />
         <Aside />
      </Grid>
   );
};

export default Layout;
