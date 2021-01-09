import styled from 'styled-components'

export const Container = styled.div`
   grid-area: AS;
   padding-left: 20px;
   border-right: 1px solid ${props => props.theme.colors.gray};
   background: ${props => props.theme.colors.secondary};
`;

export const Header = styled.header`
   height: 70px;
   display: flex;
   align-items: center;
`

export const Logo = styled.img`
   height: 40px;
   width: 40px;
`

export const Title = styled.h3`
   margin-left: 10px;
   color: ${props => props.theme.colors.white};
`

export const Menu = styled.nav`
   display: flex;
   flex-direction: column;
   justify-content: left;
   align-items: center;
   margin-top: 50px;
`

export const MenuLink = styled.a`
   display: flex;      
   align-items: center;

   color: ${props => props.theme.colors.info};
   text-decoration: none;

   margin: 7px 0;
   margin-left: 10px;   
   transition: opacity .3s;
   width: 100%;

   &:hover {
      opacity: 0.7;
   }

   > svg {
      font-size: 18px;
      margin-right: 5px;
   }
`