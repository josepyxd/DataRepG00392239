import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Home} from './components/home';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import{View} from './components/view';
import{Creating} from './components/creating';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {Editing} from './components/editing';
//allows me to route and fully connect the pages together with the imports above makes use of other imports
//to make the page look nice like navbar
class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/view">View Games</Nav.Link>
              <Nav.Link href="/creating">Create Games</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/creating' element={<Creating></Creating>}></Route>
        <Route path='/editing/:id' element={<Editing></Editing>}></Route>
        <Route path='/view' element={<View></View>}></Route>
      </Routes>
        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
      </div>
      </Router>
    );
  }
}

export default App;
