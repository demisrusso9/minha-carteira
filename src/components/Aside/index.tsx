import React from "react";

import { Container, Header, Logo, Title, Menu, MenuLink } from "./styles";

import logoImg from "../../assets/logo.svg";
import {
   MdDashboard,
   MdLibraryAdd,
   MdArrowUpward,
   MdArrowDownward,
   MdExitToApp,
} from "react-icons/md";

const Aside: React.FC = () => {
   return (
      <Container>
         <Header>
            <Logo src={logoImg} alt="Logo" />
            <Title>Minha carteira</Title>
         </Header>

         <Menu>
            <MenuLink href="#">
               <MdDashboard /> Dashboard
            </MenuLink>

            <MenuLink href="#">
               <MdLibraryAdd />
               Novo Registro
            </MenuLink>

            <MenuLink href="#">
               <MdArrowUpward />
               Entradas
            </MenuLink>

            <MenuLink href="#">
               <MdArrowDownward />
               Saídas
            </MenuLink>

            <MenuLink href="#">
               <MdExitToApp />
               Sair
            </MenuLink>
         </Menu>
      </Container>
   );
};

export default Aside;
