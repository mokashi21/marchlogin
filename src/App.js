import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./components/Register";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
