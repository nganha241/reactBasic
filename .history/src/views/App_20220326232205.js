import logo from './logo.svg';
import './App.scss';
import MyComponent from './ex/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  
        {/* <MyComponent>
        </MyComponent> */}

        <ListTodo></ListTodo>
      </header>

      <ToastContainer
          position="top-left"
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
  );
}

export default App;
