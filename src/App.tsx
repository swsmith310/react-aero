import './App.css';
import Container from './components/Container';
import Typography from "./components/Typography";
import { Green } from './components/style';

function App() {
  return (
    <Container color={Green} label="Test Component" width="500px" height="500px">
      <Typography>Hello world!</Typography>
    </Container>
  );
}

export default App;
