// import logo from './logo.svg';
import './App.css';
// import NewComponent from './components/NewComponent/NewComponent';
// import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import Home from './components/Home';
import Todo from './components/Todo';
import UserData from './components/UserData';
import TaskComponent from './components/TaskComponent/TaskManager';
import ParentCounter from './components/ParentCounter';
import SomethingWentWrong from './components/SomethingWentWrong';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';

function App() {
    return (
        <Router>
            <div className="App">
                <AppBar position="static">
                    <ul className="App-header menu">
                        <li className="menu_li">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="menu_li">
                            <Link to="/todo">Todo</Link>
                        </li>
                        <li className="menu_li">
                            <Link to="/user-data">User Data</Link>
                        </li>
                        <li className="menu_li">
                            <Link to="/counter">Counter</Link>
                        </li>
                        <li className="menu_li">
                            <Link to="/task">Task</Link>
                        </li>
                    </ul>
                </AppBar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="todo" element={<Todo title="Card List" />} />
                    <Route path="user-data" element={<UserData />} />
                    <Route path="counter" element={<ParentCounter />} />
                    <Route path="task" element={<TaskComponent />} />
                    <Route path="*" element={<SomethingWentWrong />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
