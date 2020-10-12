import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, FormControl, Select } from "@material-ui/core";
import ViewTypePage from "../../common/component/ViewTypePage";
import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#3f63bf",
    borderColor: "#3f63bf",
  },
  formControl: {
    margin: 4,
    minWidth: 120,
  },
});

const MenuContainer = styled.div`
  display: flex;
  height: 60px;
`;

const MenuBtn = styled.button`
  width: 50%;
  border: 0;

  & a {
    color: black;
    font-size: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${(props) =>
    props.value &&
    css`
      border-bottom: 3px solid #3f63bf;
    `}
`;

const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function User({ tab, order, data, handleChange }) {
  const classes = useStyles();
  const categoryList = ["scrap", "comment"];
  const orderList = ["push", "latest", "comments"];
  

  const makeSelect = (selectList, value) => {
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <Select native value={value} onChange={handleChange}>
          {selectList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  };


  return (
    <Paper elevation={3}>
      <MenuContainer>
        {categoryList.map((item, idx) => {
          console.log(item);
          console.log(tab);
          console.log(item === tab);
          return (
            <MenuBtn key={idx} value={item === tab ? 1 : 0}>
              <Link to={`/user/${item}`}>{item}</Link>
            </MenuBtn>
          );
        })}
      </MenuContainer>
      <div>
        <FilterWrap>
          <ViewTypeBtn />
          <div>
            {makeSelect(["조선", "중앙"], order)}
            {makeSelect(orderList, order)}
          </div>
        </FilterWrap>
        <ViewTypePage data={data} />
      </div>
    </Paper>
  );
}
