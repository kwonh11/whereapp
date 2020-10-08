import React from "react";
import Category from "../component/Category";
import styled from "styled-components";
import CATEGORY from "../../common/categoryCode";
import { Link } from "react-router-dom";
import { types } from "../../common/reducer/home";
import { connect } from "react-redux";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-left: 30px;
`;
const Rise = styled.div`
  opacity: ${(props) => (props.rise === "1" ? 1 : 0)};
  margin-top: ${(props) => (props.rise === "1" ? "0px" : "30px")};
  transition: all 0.5s ease-out ${(props) => props.index * 0.15}s;
`;

function CategoryContainer(props) {
  const [target, setTarget] = React.useState(null);
  const [rise, setRise] = React.useState("0");

  const { setCategoryCode } = props;

  React.useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setRise("1");
            }
          });
        },
        {
          rootMargin: "-100px",
        }
      );
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const handleClickCategory = (e) => {
    console.log(
      `handleclickCategory => ${e.currentTarget.dataset.categoryCode}`
    );
    setCategoryCode(Number(e.currentTarget.dataset.categoryCode));
  };

  return (
    <Container ref={setTarget}>
      {CATEGORY.map((item, i) => (
        <Rise
          key={item.name}
          rise={rise}
          index={i + 1}
          data-category-code={item.id}
          onClick={handleClickCategory}
        >
          <Link to={"/place"}>
            <Category image={item.image} name={item.name} />
          </Link>
        </Rise>
      ))}
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCategoryCode: (categoryCode) =>
    dispatch({ type: types.REQUEST_CATEGORY_CODE, categoryCode }),
});

export default connect(null, mapDispatchToProps)(CategoryContainer);
