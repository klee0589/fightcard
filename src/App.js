import React, { useState, useEffect } from "react";

import "./App.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/combos/comboSlice";

import axios from "axios";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      const users = response.data;
      setData({ users });
    });
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        'X-RapidAPI-Key': '4CAmq0xDZ3mshfMBzPhg3nXFdwbPp1iAulFjsndyLDYEjyHWws',
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
      }
    }
    axios.get(`https://odds.p.rapidapi.com/v4/sports`, config).then((response) => {
      const sports = response.data;
      setSports({ sports });
    });
  }, []);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

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
        {sports.sports &&
          sports.sports.map((item) => {
            return (
              <ListItem disablePadding key={item.key}>
                <ListItemButton>{item.title}</ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}

export default App;
