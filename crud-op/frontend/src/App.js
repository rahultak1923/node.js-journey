import './App.css';
import CreateUser from './components/CreateUser';
import UserShow from './components/UserShow';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
   

    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<UserShow />} />
                <Route path="/user" element={<CreateUser/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
