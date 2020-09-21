import React from "react";
import Category from "../component/Category";
import styled from 'styled-components';
import CATEGORY_CODE from '../../common/categoryCode';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-left: 30px;
`;
const Rise = styled.div`
  opacity: ${props => props.rise === "1"? 1 : 0};
  margin-top: ${props => props.rise === "1"? "0px" : "30px"};
  transition: all 0.5s ease-out ${props => props.index * 0.15}s;
`;

export default function CategoryContainer() {
  const [target, setTarget] = React.useState(null);
  const [rise, setRise] = React.useState("0");
  React.useEffect(()=> {
    let observer;
    if (target) {
        observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setRise("1");
          }
        })
      },{
        rootMargin:'50px'
      });
      observer.observe(target);
    }
    return ()=> observer && observer.disconnect();
  },[target]);
  return (
    <Container>
      {
        CATEGORY_CODE.map((item, i) => (
          <Rise key={item.name} ref={setTarget} rise={rise} index={i+1}>
            <Category image={item.image} name={item.name} />
          </Rise>
        ))
      }
    </Container>
  )
}
