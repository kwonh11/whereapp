import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    height: "100%",
    marginRight: "20px"
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
    <Paper square className={classes.paper}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        orientation="vertical"
        variant="scrollable"
      >
        {categoryList.map((item, idx) => (
          <Tab key={idx} label={item} style={{fontSize:"1.1rem", fontWeight: "bold"}}/>
        ))}
      </Tabs>
    </Paper>
  );
}
