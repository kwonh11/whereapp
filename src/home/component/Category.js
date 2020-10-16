import { Button } from '@material-ui/core';
import styled from 'styled-components';


const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,1) 5%, rgba(247,247,247,1) 17%, rgba(246,246,246,0.92) 19%, rgba(243,243,243,0) 43%, rgba(237,237,237,0) 100%),
  url(${(props) => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const Content = styled.div`
  color: #686670;
  width: 275px;
  height: 275px;
  padding: 15px;
  font-weight: bolder;
  font-size: 1.6rem;
  text-align: left;
  text-shadow: 1px 3px 2px rgba(0,0,0,0.2);
`;
const Container = styled.div`
  width: 275px; 
  height: 275px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3), 0 -6px 16px -6px rgba(0,0,0,0.025);
  &:hover {
    transform: translateY(-5px);
  }
  transition: all 0.2s ease-out;
`;
export default function Category({image, name}) {
  return (
    <Container>
      <StyledButton image={image}>
        <Content>{name}</Content>
      </StyledButton>
    </Container>
  );
};