import logo from './logo.svg';
import './App.scss';
import MyComponent from './ex/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './ex/Hom';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
      <Nav/>
        <img src={logo} className="App-logo" alt="logo" />

        <Switch>
            <Route path="/" exact ><Home/></Route>
            <Route path="/todo" ><ListTodo/></Route>
            <Route path="/about"><MyComponent/></Route>
            <Route path="/user" exact><ListUser/></Route>
            <Route path="/:user/:id"><DetailUser/></Route>
        </Switch>
        
      </header>

      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />

    </div>
    </BrowserRouter>
  );
}

export default App;
