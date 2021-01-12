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

import { Link } from "react-router-dom";

const Aside: React.FC = () => {
   return (
      <Container>
         <Header>
            <Logo src={logoImg} alt="Logo" />
            <Title>Minha carteira</Title>
         </Header>

         <Menu>
            <MenuLink href="/dashboard">               
               <MdDashboard /> Dashboard
            </MenuLink>

            <MenuLink href="#">
               <MdLibraryAdd />
               Novo Registro
            </MenuLink>

            <MenuLink href="/list/entry-balance">
               <MdArrowUpward />
               Entradas
            </MenuLink>

            <MenuLink href="/list/exit-balance">
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
