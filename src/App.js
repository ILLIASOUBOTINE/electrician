import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import SpinLoading from "./UI/SpinLoading";
import Header from "./components/Header";
import Initial from "./components/Initial";
import Template from "./components/Template.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SpinLoading />
       <Initial />
        
        <Routes>
          
          <Route path="/login" element={<Template><Login /></Template>} />
          <Route path="/register" element={<Template><Register /></Template>} />
          <Route path="/" element={<Template><Home /></Template>} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Template>
                  <Profile />
                </Template>
                
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
