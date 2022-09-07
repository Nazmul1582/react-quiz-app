import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import '../App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './Layout'
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <Router>
          <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="Result" element={<Result />} />
                <Route path="quiz" element={<Quiz />} />
            </Routes>
          </Layout>
      </Router>
    </div>
  );
}

export default App;
