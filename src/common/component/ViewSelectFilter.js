import styled from "styled-components";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formControl: {
    margin: 4,
    minWidth: 120,
  },
});

export default function ViewSelectFilter({ arrange, handleChangeArrange }) {
  const classes = useStyles();
  const arrangeList = [
    {
      value: "A",
      title: "제목순",
    },
    {
      value: "B",
      title: "인기순",
    },
    {
      value: "C",
      title: "최근수정순",
    },
    {
      value: "D",
      title: "등록순",
    },
    {
      value: "E",
      title: "거리순",
    },
  ];

  const makeSelect = (selectList, value) => {
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <Select native value={value} onChange={handleChangeArrange}>
          {selectList.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </Select>
      </FormControl>
    );
  };
  return (
    <div>
      {makeSelect(arrangeList, arrange)}
      {makeSelect(["1000m", "2000m"], arrange)}
    </div>
  );
}
