import React from "react"
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import AuthProvider from "../contexts/AuthContext";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboards from "./Dashboards";
import Login from "./Login";

function App() {
  return (
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboards" element={<Dashboards/>}/>
              </Routes>
          </BrowserRouter>
        </div>
      </Container>
      </AuthProvider>
  )
}

export default App;
