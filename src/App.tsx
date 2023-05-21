import './App.css';
import Container from './components/Container';
import Typography from "./components/Typography";
import TextField from './components/TextField';
import { useState } from 'react';

function App() {
  const [ testValue, setTestValue ] = useState("Hello");

  return (
    <Container color="violet" label="Test Component" width="500px" height="500px">
      <Typography>Hello world!</Typography>
      <TextField color="violet" value={testValue} onChange={(e: any) => setTestValue(e.target.value)} />
    </Container>
  );
}

export default App;
