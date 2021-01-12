import styled from 'styled-components'

interface ITag {
   color: string;
}

export const Container = styled.li`
   background-color: ${props => props.theme.colors.tertiary};
   list-style: none;
   border-radius: 5px;
   margin: 10px;
   padding: 12px 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
   transition: all .3s;

   position: relative;

   &:hover {
      opacity: .8s;
      transform: translateX(10px);
   }

   > div {
      display: flex;
      flex-direction: column;    
      padding-left: 10px;
   }   
`

export const Tag = styled.div<ITag>`
   background-color: ${props => props.color};    
   border-radius: 5px;  
   width: 6px;
   height: 100%;
   position: absolute;
   left: 0;   
`