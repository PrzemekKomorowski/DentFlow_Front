
import styled from 'styled-components';
   
export const Box = styled.div`
  margin-top: 100px;
  padding-top: 40px;
  background: #1784B3;
  bottom: 0;
  width: 100%;
  height: 15rem;
  @media only screen and (max-width: 950px){
    flex-direction: column;
    align-items: center;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  height: 10rem;
  
  @media(max-width: 1350px) {
    margin-left: 40px;
  }
  
  @media(max-width: 950px) {
    margin-left: 0;
  } 
`;
   
export const Row = styled.div`
  display: inherit;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: black;
      transition: 200ms ease-in;
  }

  @media(max-width: 768px) {
    font-size: 10px;
  }
`;

export const FooterText = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  
  @media(max-width: 768px) {
    font-size: 10px;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;

  @media(max-width: 768px) {
    font-size: 14px;
  }
`;