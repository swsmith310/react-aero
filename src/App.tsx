import './App.css';
import Container from './components/Container';
import Typography from "./components/Typography";

function App() {
  return (
    <Container label="Test Component" width="500px" height="500px">
      <Typography>Hello world!</Typography>
    </Container>
  );
}

export default App;
