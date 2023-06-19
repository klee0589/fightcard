// import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
          <Button variant="contained">Hello World</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
