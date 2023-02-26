import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import DragandDrop from './components/DragandDrop';
import DragFiles from './components/DragFiles';
import { Container, Row, Col } from "react-bootstrap";
import Register from './components/Register';
import Home from './Home';
import FileUploadAudio from './components/FileUploadAudio';
import FileUploadPDF from './components/FileUploadPDF';
import Account from './components/Account';
import Login from './components/Login';
import Buddies from './components/Buddies';
function App() {
  return (
    <div>
      <Container>
<Row>
  <Col>
    <h1>Welcome to EyeSpeak</h1>
    <img></img>
  </Col>
</Row>
</Container>
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home/>} />
          <Route exact path = "/register" element = {<Register/>} />
          <Route exact path = "/login" element = {<Login/>} />
          <Route exact path = "/draganddrop" element = {<DragandDrop/>} />
          <Route exact path = "/audio-page" element = {<FileUploadAudio/>} />
          <Route exact path = "/pdf-page" element = {<FileUploadPDF/>} />
          <Route exact path = "/account" element = {<Account/>} />
          <Route exact path = "/buddies" element = {<Buddies/>} />
          
        </Routes>
      </div>
    </Router>    
</div>
  );

}

export default App;