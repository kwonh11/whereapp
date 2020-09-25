import styled from "styled-components";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formControl: {
    margin: 4,
    minWidth: 120,
  },
});

export default function ViewSelectFilter({ order }) {
  const classes = useStyles();
  const orderList = ["push", "latest", "comments"];
  //담은 순, 최신 순, 댓글 많은 순

  const makeSelect = (selectList, value) => {
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <Select native value={value}>
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
    <div>
      {makeSelect(orderList, order)}
      {makeSelect(["1000m", "2000m"], order)}
    </div>
  );
}
