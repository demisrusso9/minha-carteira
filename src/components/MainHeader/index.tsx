import { useMemo } from "react";

import { Container, Profile, Welcome, Username } from "./styles";
import emojis from "../../utils/emojis";
import Toggle from '../../components/Toggle'


const MainHeader: React.FC = () => {
   const randomEmojis = useMemo(() => {
      const index = Math.floor(Math.random() * emojis.length);
      return emojis[index];
   }, []);

   return (
      <Container>
         <Toggle>

         </Toggle>

         <Profile>
            <Welcome>Hello There! {randomEmojis}</Welcome>
            <Username>Demis Russo</Username>
         </Profile>
      </Container>
   );
};

export default MainHeader;
