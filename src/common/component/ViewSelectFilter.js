import styled from "styled-components";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formControl: {
    margin: 4,
    minWidth: 120,
  },
});

export default function ViewSelectFilter({
  arrange,
  dist,
  handleChangeFilter,
}) {
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

  const distList = [1000, 3000, 5000];

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          native
          value={arrange}
          onChange={handleChangeFilter}
          name="arrange"
        >
          {arrangeList.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.title}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select native value={dist} onChange={handleChangeFilter} name="dist">
          {distList.map((item, idx) => (
            <option key={idx} value={item}>
              {`${item}m`}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
