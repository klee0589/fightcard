import React, { useState, useEffect } from "react";

// import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/combos/comboSlice";

import axios from "axios";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      const users = response.data;
      setData({ users });
    });
  }, []);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  console.log('data = ', data)
  return (
    <div className="App">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Added
          </Typography>
          <div>
            <Button
              variant="contained"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </Button>
            <span>{count}</span>
            <Button
              variant="contained"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </Button>
          </div>
        </CardContent>
      </Card>
      <List>
        {data.users &&
          data.users.map((item) => {
            return (
              <ListItem disablePadding>
                <ListItemButton>{item.name}</ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}

export default App;
