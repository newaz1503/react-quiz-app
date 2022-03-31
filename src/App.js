import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./componenets/Layout";
import PrivateRoute from "./componenets/PrivateRoute";
import PublicRoute from "./componenets/PublicRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/SignUp";
import "./styles/Global.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AuthProvider />}>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  {" "}
                  <Signup />{" "}
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  {" "}
                  <Login />{" "}
                </PublicRoute>
              }
            />
            <Route
              path="/quiz/:id"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/result/:id"
              element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              }
            ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
