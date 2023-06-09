import './App.css';
import Container from './components/Container';
import Typography from "./components/Typography";
import TextField from './components/TextField';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [ testValue, setTestValue ] = useState("Hello");
  const [ color, setColor ] = useState("violet")

  return (
    <Container color={color} label="Test Component" width="500px" height="500px">
      <Typography>Hello world!</Typography>
      <TextField color={color} value={testValue} onChange={(e: any) => setTestValue(e.target.value)} />
      <Button color={color} label="Click me!" onClick={() => console.log("I am a button!")} />
    </Container>
  );
}

export default App;
