import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#3f63bf",
    borderColor: "#3f63bf",
  },
});

export default function Category() {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const categoryList = ["전체", "정치", "경제", "사회"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        variant="fullWidth"
      >
        {categoryList.map((item, idx) => (
          <Tab key={idx} label={item} />
        ))}
      </Tabs>
    </Paper>
  );
}
