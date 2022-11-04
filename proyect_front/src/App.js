import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import { Container } from 'react-bootstrap';
import Login from './components/login/login';
import Menu from './components/navbar/navbar';

function App() {
  return (
    <div>
      <Container>
        <Menu />
        <Login />

      </Container>
    </div>

  );
}


export default App;
