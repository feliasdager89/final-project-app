import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Account/Login';
import Profile from './Account/Profile';
import SignIn from './Account/Login';
import Register from './Account/Register';


const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
               
            </Routes>
        </Router>
    );
};

export default App;
